"""Materialize approved Git paths and copy them to the Pages artifact."""
import argparse
import shutil
import subprocess
from pathlib import Path, PurePosixPath

CONFIG = Path(".github/pages")
RESEARCH_DIRS = {
    "articles", "case-studies", "csv", "game-guide", "images", "mermaid",
    "pdf", "reference-assets", "research", "research-methodology",
}
EXTENSIONS = {".csv", ".gif", ".jpeg", ".jpg", ".json", ".md", ".mmd", ".pdf",
              ".png", ".svg", ".txt", ".webp", ".yml"}

def manifest():
    paths = (CONFIG / "public-research-paths.txt").read_text(encoding="utf-8").splitlines()
    seen = set()
    for entry in paths:
        path = PurePosixPath(entry)
        if (not entry or entry != path.as_posix() or path.is_absolute()
                or any(part.startswith(".") for part in path.parts)
                or "\\" in entry or not entry.isprintable()
                or entry.casefold() in seen or path.suffix.lower() not in EXTENSIONS
                or (len(path.parts) > 1 and path.parts[0] not in RESEARCH_DIRS)):
            raise ValueError(f"Invalid or duplicate public path: {entry!r}")
        seen.add(entry.casefold())
        yield path

def sparse_pattern(path):
    # No cone mode: these are anchored literal file paths, including names with spaces.
    return "/" + "".join("\\" + char if char in "[]?*\\ " else char for char in str(path))

def git(*args, **kwargs):
    return subprocess.run(["git", *args], check=True, **kwargs)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("artifact", type=Path)
    args = parser.parse_args()
    root = Path.cwd()
    artifact = args.artifact.resolve(strict=True)
    if not artifact.is_dir() or artifact == root or root.joinpath("web").resolve().is_relative_to(artifact):
        raise ValueError("Use a separate, already-built Pages artifact directory")
    if not (artifact / "sitemap.xml").is_file():
        raise ValueError("Missing Jekyll artifact sitemap.xml")
    paths = list(manifest())
    index = git("ls-files", "--stage", "-z", stdout=subprocess.PIPE).stdout
    regular = set()
    for record in index.split(b"\0"):
        if not record:
            continue
        metadata, path = record.split(b"\t", 1)
        mode, _, stage = metadata.split()
        if mode in (b"100644", b"100755") and stage == b"0":
            regular.add(path.decode("utf-8", errors="surrogateescape"))
    for path in paths:
        if str(path) not in regular:
            raise ValueError(f"Public path must be a tracked regular file: {path}")
        output = artifact / path
        if output.exists() or output.is_symlink() or not output.resolve().is_relative_to(artifact):
            raise ValueError(f"Public path collides with artifact or escapes it: {path}")

    if subprocess.run(["git", "config", "--bool", "core.sparseCheckout"],
                      capture_output=True, text=True, check=False).stdout.strip() == "true":
        rules = ["/.github/", "/web/", *(sparse_pattern(path) for path in paths)]
        git("sparse-checkout", "set", "--no-cone", "--stdin",
            input="\n".join(rules) + "\n", text=True, encoding="utf-8")
    for path in paths:
        source = root / path
        if source.resolve() != source or not source.is_file() or not source.stat().st_size:
            raise ValueError(f"Missing, empty or non-regular source: {path}")
        output = artifact / path
        output.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, output)
    print(f"Published {len(paths)} approved research paths")

if __name__ == "__main__":
    main()

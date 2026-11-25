"""Check the Pages artifact before it can be uploaded."""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from xml.etree import ElementTree

from publish_research import CONFIG, manifest

SITE = "https://j13343sh.github.io/Rune-Factory-Inheritance-Research/"
REQUIRED_FILES = (
    "BingSiteAuth.xml", "google27999aa8e9cf9656.html", "robots.txt", "site-map.html",
    "guides/candidate-count-calculator.html", "guides/shop-inventory-calculator.html",
    "assets/js/rf-share.js", "assets/css/rf-share.css",
)

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals = []
        self.description = False
        self.og_url = []
        self.structured_data = []
        self.json_script = None
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        if tag == "meta" and attrs.get("name") == "description":
            self.description = bool(attrs.get("content"))
        if tag == "meta" and attrs.get("property") == "og:url":
            self.og_url.append(attrs.get("content"))
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.json_script = []
        self.links.extend(attrs[k] for k in ("href", "src", "poster", "data-media-src") if attrs.get(k))

    def handle_data(self, data):
        if self.json_script is not None:
            self.json_script.append(data)

    def handle_endtag(self, tag):
        if tag == "script" and self.json_script is not None:
            self.structured_data.append(json.loads("".join(self.json_script)))
            self.json_script = None

def deployed_file(artifact, url):
    relative = unquote(urlsplit(url.removeprefix(SITE)).path)
    output = (artifact / relative).resolve()
    if not output.is_relative_to(artifact):
        raise ValueError(f"Public link escapes the artifact: {url}")
    return output / "index.html" if output.is_dir() else output

def main():
    artifact = Path(sys.argv[1]).resolve(strict=True)
    required = set((CONFIG / "required-sitemap-urls.txt").read_text().splitlines())
    urls = [item.text for item in ElementTree.parse(artifact / "sitemap.xml").findall(".//{*}loc")]
    if len(urls) != len(set(urls)) or required.difference(urls):
        raise ValueError(f"Duplicate sitemap entries or missing paths: {sorted(required.difference(urls))}")
    for path in [*REQUIRED_FILES, *manifest()]:
        if not (artifact / path).is_file() or not (artifact / path).stat().st_size:
            raise ValueError(f"Missing or empty required output: {path}")
    for url in urls:
        if not url or not url.startswith(SITE):
            raise ValueError(f"Unexpected sitemap URL: {url}")
        page = Page()
        page.feed(deployed_file(artifact, url).read_text(encoding="utf-8"))
        if page.canonicals != [url] or page.og_url != [url] or not page.description or not page.structured_data:
            raise ValueError(f"Incomplete canonical or metadata: {url}")
        for link in page.links:
            target = urljoin(url, link)
            if target.startswith(SITE) and not deployed_file(artifact, target).is_file():
                raise ValueError(f"Broken link from {url}: {target}")
    print(f"Verified {len(urls)} sitemap URLs and same-site dependencies")

if __name__ == "__main__":
    main()

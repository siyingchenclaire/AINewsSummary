import feedparser
from bs4 import BeautifulSoup
import os
import json
from datetime import datetime

# RSS feed URL
rss_url = "https://www.technologyreview.com/feed"

# Output directory
output_dir = "news/news_mit_technology_review"
os.makedirs(output_dir, exist_ok=True)

# Current date
today = datetime.now().strftime("%Y-%m-%d")

# Parse the RSS feed
feed = feedparser.parse(rss_url)

# Process each RSS item
for idx, entry in enumerate(feed.entries):
    title = entry.get("title", "").strip()
    link = entry.get("link", "").strip()
    author = entry.get("dc_creator", "").strip()
    pub_date = entry.get("published", "").strip()
    categories = [tag["term"] for tag in entry.get("tags", [])] if "tags" in entry else []

    # Extract content from content:encoded
    content_html = entry.get("content", [{}])[0].get("value", "")
    soup = BeautifulSoup(content_html, "html.parser")

    # Extract <p> and <h3> tags in document order
    elements = soup.find_all(["p", "h3"])
    article_parts = []

    for el in elements:
        text = el.get_text(strip=True)
        if not text:
            continue
        if el.name == "h3":
            article_parts.append(f"\n### {text}\n")
        else:
            article_parts.append(text)

    # Combine into full article
    full_article = "\n\n".join(article_parts)

    # Save as JSON
    article_data = {
        "title": title,
        "link": link,
        "author": author,
        "pub_date": pub_date,
        "categories": categories,
        "article": full_article
    }

    filename = f"{today}_article_{idx+1}.json"
    with open(os.path.join(output_dir, filename), "w", encoding="utf-8") as f:
        json.dump(article_data, f, indent=2, ensure_ascii=False)

print(f"Saved {len(feed.entries)} articles to {output_dir}")

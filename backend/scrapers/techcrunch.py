import feedparser
import requests
from bs4 import BeautifulSoup
import os
import json

# RSS feed URL (example: TechCrunch)
FEED_URL = "https://techcrunch.com/feed/"
OUTPUT_DIR = "news/news_techcrunch"

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

def clean_article_text(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    
    # Select all <p> tags with class "wp-block-paragraph"
    paragraphs = soup.find_all("p", class_="wp-block-paragraph")

    if not paragraphs:
        # Fallback if the specific class isn't found
        paragraphs = soup.find_all("p")

    # Join text from paragraphs
    text = "\n\n".join(p.get_text(strip=True) for p in paragraphs)
    return text.strip()

def process_feed(feed_url):
    feed = feedparser.parse(feed_url)

    for idx, entry in enumerate(feed.entries):
        title = entry.get("title", "No Title")
        link = entry.get("link", "")
        summary = entry.get("summary", "")
        pub_date = entry.get("published", "Unknown Date")

        try:
            response = requests.get(link, timeout=10)
            response.raise_for_status()
            full_text = clean_article_text(response.text)
        except Exception as e:
            full_text = f"[Failed to retrieve article content: {e}]"

        # Prepare data as dictionary
        content = {
            "title": title,
            "date": pub_date,
            "link": link,
            "summary": summary,
            "full_article": full_text
        }

        # Write to JSON file
        safe_title = "".join(c for c in title if c.isalnum() or c in " _-").rstrip()
        file_name = f"{idx+1:03d}_{safe_title[:50]}.json"
        file_path = os.path.join(OUTPUT_DIR, file_name)

        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(content, f, ensure_ascii=False, indent=2)

        print(f"Saved: {file_name}")

# Run
process_feed(FEED_URL)

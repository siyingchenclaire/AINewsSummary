import feedparser
import requests
import os
import json
from datetime import datetime
from bs4 import BeautifulSoup
import re # For sanitizing filenames

def sanitize_filename(title):
    """
    Sanitizes a string to be used as a filename.
    Removes invalid characters and shortens it if too long.
    """
    s = str(title).strip().replace(' ', '_')
    s = re.sub(r'(?u)[^-\w.]', '', s) # Remove invalid characters
    return s[:150] # Limit filename length

def get_and_save_podcast_data(rss_url, base_output_dir="podcast_data"):
    """
    Fetches podcast data from an RSS feed and saves each episode's details
    (title, audio link, publication date, summary) as a JSON file.

    Args:
        rss_url (str): The URL of the podcast RSS feed.
        base_output_dir (str): The base directory to save the podcast data.
    """
    print(f"Attempting to fetch RSS feed from: {rss_url}")
    try:
        # Fetch the RSS feed content from the URL
        response = requests.get(rss_url, timeout=10)
        response.raise_for_status() # Raise an HTTPError for bad responses (4xx or 5xx)
        feed_content = response.text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching RSS feed from {rss_url}: {e}")
        return

    # Parse the RSS feed
    feed = feedparser.parse(feed_content)

    if not feed.entries:
        print(f"No entries found in the RSS feed from {rss_url}.")
        return

    podcast_title_raw = feed.feed.get('title', 'unknown_podcast')
    podcast_safe_title = sanitize_filename(podcast_title_raw)
    
    # Create a specific directory for this podcast
    output_dir = os.path.join(base_output_dir, podcast_safe_title)
    os.makedirs(output_dir, exist_ok=True)
    print(f"Saving podcast data to: {output_dir}")

    processed_count = 0
    for idx, entry in enumerate(feed.entries):
        title = entry.get('title', f"Episode {idx+1}")
        audio_link = None
        
        # Extract audio link from enclosure tag
        if hasattr(entry, 'enclosures') and entry.enclosures:
            for enclosure in entry.enclosures:
                if enclosure.get('type', '').startswith('audio/'):
                    audio_link = enclosure.get('url')
                    break # Take the first audio link found

        # Extract publication date
        pub_date_raw = entry.get('published')
        if pub_date_raw:
            try:
                # Attempt to parse date and reformat it
                pub_date_obj = datetime.strptime(pub_date_raw, '%a, %d %b %Y %H:%M:%S %z')
                publication_date = pub_date_obj.strftime('%Y-%m-%d %H:%M:%S %Z')
            except ValueError:
                publication_date = pub_date_raw # Fallback to raw if parsing fails
        else:
            publication_date = "N/A"

        # Extract and clean summary/description
        # Prioritize content:encoded, then description/summary
        summary_html = entry.get('content', [{}])[0].get('value', '') or entry.get('summary', '')
        soup = BeautifulSoup(summary_html, 'html.parser')
        summary_text = soup.get_text(separator=' ', strip=True)
        
        # Fallback to description if content:encoded/summary is empty
        if not summary_text and entry.get('description'):
             soup = BeautifulSoup(entry.get('description', ''), 'html.parser')
             summary_text = soup.get_text(separator=' ', strip=True)

        # get episode number 
        itunes_episode = entry.get('itunes_episode', '').strip()     
        
        # Prepare data for JSON
        episode_data = {
            "title": title,
            "audio_link": audio_link,
            "publication_date": publication_date,
            "summary": summary_text,
            "itunes_episode": itunes_episode
        }

        # Create a safe filename
        file_pub_date = datetime.now().strftime("%Y-%m-%d") # Use current date for file prefix if exact pub date not ideal for filename
        if pub_date_raw:
            try:
                file_pub_date = datetime.strptime(pub_date_raw, '%a, %d %b %Y %H:%M:%S %z').strftime('%Y-%m-%d')
            except ValueError:
                pass # Use current date or default

        filename = f"{file_pub_date}_{sanitize_filename(title)}.json"
        file_path = os.path.join(output_dir, filename)

        try:
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(episode_data, f, indent=2, ensure_ascii=False)
            processed_count += 1
        except Exception as e:
            print(f"Error saving file {filename}: {e}")

    print(f"Successfully saved {processed_count} episodes for '{podcast_title_raw}'.")

if __name__ == "__main__":
    # RSS feed URL for Pivot podcast
    pivot_rss_url = "https://feeds.megaphone.fm/pivot"
    get_and_save_podcast_data(pivot_rss_url)
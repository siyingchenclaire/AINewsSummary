import requests
from bs4 import BeautifulSoup

# Target URL
url = 'https://en.wikipedia.org/wiki/Dublin'

# Send GET request
response = requests.get(url)
# Check for successful response
if response.status_code == 200:
    soup = BeautifulSoup(response.text, "html.parser")
    elements = soup.find_all("a")
    for 
"""leoworks/aliexpress-search-scraper — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "keywords": [
        "wireless earbuds",
        "phone case magsafe",
        "led strip lights"
    ],
    "maxResultsPerKeyword": 60,
    "sort": "orders",
    "country": "US",
    "currency": "USD"
}

run = client.actor("leoworks/aliexpress-search-scraper").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["position", "title", "price", "soldCount", "isAd"]})
    if i == 4:
        break

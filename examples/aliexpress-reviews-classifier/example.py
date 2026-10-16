"""leoworks/aliexpress-reviews-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "productUrls": [
        "https://www.aliexpress.com/item/1005008549911526.html"
    ],
    "reviewsPerProduct": 20,
    "reviewFilter": "all",
    "classifyReviews": True
}

run = client.actor("leoworks/aliexpress-reviews-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["rating", "country", "textEnglish", "labels"]})
    if i == 4:
        break

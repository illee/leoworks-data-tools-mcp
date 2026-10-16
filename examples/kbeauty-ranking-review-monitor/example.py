"""leoworks/kbeauty-ranking-review-monitor — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "sources": [
        "oliveyoung_global"
    ],
    "oliveyoungCategories": [
        "skincare"
    ],
    "maxProductsPerRanking": 10,
    "reviewsPerProduct": 20,
    "classifyReviews": True
}

run = client.actor("leoworks/kbeauty-ranking-review-monitor").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["type", "rank", "productName", "brand", "price", "rating"]})
    if i == 4:
        break

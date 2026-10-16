"""leoworks/naver-blog-brand-monitor — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "queries": [
        "라운드랩 선크림"
    ],
    "brandNames": [
        "라운드랩",
        "Round Lab"
    ],
    "maxPostsPerQuery": 20,
    "sort": "recent"
}

run = client.actor("leoworks/naver-blog-brand-monitor").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["title", "sponsored", "sentiment", "brandMentions"]})
    if i == 4:
        break

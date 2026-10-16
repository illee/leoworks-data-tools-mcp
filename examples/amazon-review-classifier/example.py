"""leoworks/amazon-review-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "texts": [
        "Stopped charging after two weeks. Returning it.",
        "Fits great but the fabric is see-through when I squat.",
        "Arrived with a cracked screen and no box. Seller never replied.",
        "Exactly as described, sturdy and easy to set up. Bought a second one."
    ],
    "customLabels": [
        "mentions the smell"
    ]
}

run = client.actor("leoworks/amazon-review-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["rating", "complaintTypes", "sentiment", "returnIntent", "action"]})
    if i == 4:
        break

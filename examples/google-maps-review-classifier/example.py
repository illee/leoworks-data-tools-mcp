"""leoworks/google-maps-review-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "places": [
        "ChIJifIePKtZwokRVZ-UdRGkZzs",
        "ChIJCar0f49ZwokR6ozLV-dHNTE"
    ],
    "maxReviewsPerPlace": 20
}

run = client.actor("leoworks/google-maps-review-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["rating", "sentiment", "complaintTypes", "needsReply", "alert"]})
    if i == 4:
        break

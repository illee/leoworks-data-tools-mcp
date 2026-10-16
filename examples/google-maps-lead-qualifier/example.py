"""leoworks/google-maps-lead-qualifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "icp": "Independent dental practices that offer cosmetic dentistry such as teeth whitening or veneers.",
    "searchQueries": [
        "cosmetic dentist"
    ],
    "location": "Chicago, USA",
    "maxPlacesPerSearch": 10,
    "excludeChains": True
}

run = client.actor("leoworks/google-maps-lead-qualifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["title", "leadScore", "tier", "reason"]})
    if i == 4:
        break

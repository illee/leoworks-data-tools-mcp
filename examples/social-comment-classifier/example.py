"""leoworks/social-comment-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "texts": [
        "Where can I buy this in Canada? Need it!!",
        "Ordered 3 weeks ago and still nothing. Is anyone answering messages?",
        "Can you make this in black? I would buy two.",
        "DM me to earn $500 a day from home 💰💰",
        "Love this, the colors are perfect 😍"
    ],
    "customLabels": [
        "asks about shipping"
    ]
}

run = client.actor("leoworks/social-comment-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["text", "type", "sentiment", "needsReply"]})
    if i == 4:
        break

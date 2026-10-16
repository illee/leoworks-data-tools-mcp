"""leoworks/company-website-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "icp": "Independent dental practices (not chains)",
    "pages": [
        {
            "url": "https://acme-analytics.example.com/",
            "title": "Acme Analytics - demand forecasting for retailers",
            "text": "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada. Start a 14-day free trial - plans from $49 per month."
        },
        {
            "url": "https://brightsmile-dental.example.org/",
            "title": "Bright Smile Dental - family dentist in Austin, TX",
            "text": "Bright Smile Dental is a family-owned dental practice in South Austin. Dr. Lee and our team offer cleanings, fillings, Invisalign and same-day crowns. New patients welcome - call or book online."
        }
    ]
}

run = client.actor("leoworks/company-website-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["domain", "industry", "customerType", "fitScore", "tier", "reason"]})
    if i == 4:
        break

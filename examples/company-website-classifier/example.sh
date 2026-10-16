#!/usr/bin/env bash
# leoworks/company-website-classifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~company-website-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
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
JSON

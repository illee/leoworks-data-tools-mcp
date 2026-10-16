#!/usr/bin/env bash
# leoworks/amazon-review-classifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~amazon-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
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
JSON

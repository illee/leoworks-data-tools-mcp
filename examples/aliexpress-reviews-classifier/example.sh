#!/usr/bin/env bash
# leoworks/aliexpress-reviews-classifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~aliexpress-reviews-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "productUrls": [
    "https://www.aliexpress.com/item/1005008549911526.html"
  ],
  "reviewsPerProduct": 20,
  "reviewFilter": "all",
  "classifyReviews": true
}
JSON

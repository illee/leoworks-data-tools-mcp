#!/usr/bin/env bash
# leoworks/kbeauty-ranking-review-monitor — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~kbeauty-ranking-review-monitor/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "sources": [
    "oliveyoung_global"
  ],
  "oliveyoungCategories": [
    "skincare"
  ],
  "maxProductsPerRanking": 10,
  "reviewsPerProduct": 20,
  "classifyReviews": true
}
JSON

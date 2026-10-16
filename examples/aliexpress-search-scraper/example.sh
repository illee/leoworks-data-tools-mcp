#!/usr/bin/env bash
# leoworks/aliexpress-search-scraper — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~aliexpress-search-scraper/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "keywords": [
    "wireless earbuds",
    "phone case magsafe",
    "led strip lights"
  ],
  "maxResultsPerKeyword": 60,
  "sort": "orders",
  "country": "US",
  "currency": "USD"
}
JSON

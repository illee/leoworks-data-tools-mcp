#!/usr/bin/env bash
# leoworks/naver-blog-brand-monitor — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~naver-blog-brand-monitor/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "queries": [
    "라운드랩 선크림"
  ],
  "brandNames": [
    "라운드랩",
    "Round Lab"
  ],
  "maxPostsPerQuery": 20,
  "sort": "recent"
}
JSON

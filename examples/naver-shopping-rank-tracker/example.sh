#!/usr/bin/env bash
# leoworks/naver-shopping-rank-tracker — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~naver-shopping-rank-tracker/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "targets": [
    {
      "keyword": "무선이어폰",
      "match": "브리츠 공식몰"
    },
    {
      "keyword": "블루투스 이어폰",
      "match": "브리츠 공식몰"
    },
    {
      "keyword": "텀블러",
      "match": "스탠리"
    }
  ],
  "includeAds": true,
  "topCompetitors": 10
}
JSON

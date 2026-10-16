#!/usr/bin/env bash
# leoworks/korean-review-classifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~korean-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요.",
    "한 달도 안 돼서 충전이 안 됩니다. 교환 요청했는데 답이 없어요.",
    "향이 너무 강해서 두통이 와요. 가격 대비 별로입니다.",
    "항상 쓰던 거라 이번에도 재구매했어요. 할인할 때 사니 좋네요!"
  ],
  "customLabels": [
    "mentions the smell"
  ]
}
JSON

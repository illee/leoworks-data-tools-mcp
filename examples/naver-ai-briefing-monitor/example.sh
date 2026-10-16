#!/usr/bin/env bash
# leoworks/naver-ai-briefing-monitor — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~naver-ai-briefing-monitor/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "queries": [
    "콜라겐 효과",
    "선크림 추천 지성",
    "세라마이드 크림 효능",
    "레티놀 부작용"
  ],
  "brandNames": [
    "라운드랩"
  ],
  "competitorNames": [
    "아누아",
    "토리든"
  ]
}
JSON

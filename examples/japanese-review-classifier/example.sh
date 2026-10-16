#!/usr/bin/env bash
# leoworks/japanese-review-classifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~japanese-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。",
    "すぐ壊れました。充電できません。返品したいです。",
    "注文から届くまで10日もかかりました。連絡も一切ありません。",
    "品質が良くて3回目のリピートです。セール中に買えて満足しています。"
  ],
  "customLabels": [
    "mentions the smell"
  ]
}
JSON

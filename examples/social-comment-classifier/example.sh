#!/usr/bin/env bash
# leoworks/social-comment-classifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~social-comment-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "Where can I buy this in Canada? Need it!!",
    "Ordered 3 weeks ago and still nothing. Is anyone answering messages?",
    "Can you make this in black? I would buy two.",
    "DM me to earn $500 a day from home 💰💰",
    "Love this, the colors are perfect 😍"
  ],
  "customLabels": [
    "asks about shipping"
  ]
}
JSON

#!/usr/bin/env bash
# leoworks/google-maps-lead-qualifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~google-maps-lead-qualifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "icp": "Independent dental practices that offer cosmetic dentistry such as teeth whitening or veneers.",
  "searchQueries": [
    "cosmetic dentist"
  ],
  "location": "Chicago, USA",
  "maxPlacesPerSearch": 10,
  "excludeChains": true
}
JSON

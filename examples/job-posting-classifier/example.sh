#!/usr/bin/env bash
# leoworks/job-posting-classifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~job-posting-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "skills": [
    "Python",
    "SQL"
  ],
  "jobs": [
    {
      "title": "Senior Data Analyst",
      "company": "Example Co",
      "location": "Chicago, IL",
      "description": "Hybrid role: 3 days a week in our Chicago office. 5+ years of SQL and BI experience required. Full-time. Salary $110,000-$130,000 per year. We are unable to sponsor work visas."
    },
    {
      "title": "Warehouse Associate",
      "company": "Example Logistics",
      "location": "Dallas, TX",
      "description": "Entry level - no experience needed, we train you. Part-time evening shifts, in person at our Dallas warehouse. $18/hour."
    }
  ]
}
JSON

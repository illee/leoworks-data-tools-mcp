"""leoworks/job-posting-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
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

run = client.actor("leoworks/job-posting-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["title", "workMode", "experience", "visa", "salaryAnnualMinUsd"]})
    if i == 4:
        break

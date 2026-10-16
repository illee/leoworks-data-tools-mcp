# leoworks/job-posting-classifier — code examples

Store page: https://apify.com/leoworks/job-posting-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

Input taken from the Actor's public example task (cheap, a few cents at most).

Set your token once (Apify Console → Settings → API & Integrations). Never paste it into code you publish:

```bash
export APIFY_TOKEN="<your token>"
```

## Python

```bash
pip install apify-client
python example.py
```

```python
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
```

## JavaScript (Node 18+)

```bash
npm install apify-client
node example.mjs
```

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
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
};

const run = await client.actor('leoworks/job-posting-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["title", "workMode", "experience", "visa", "salaryAnnualMinUsd"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
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
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/job-posting-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/job-posting-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Which of these jobs are remote and sponsor visas? Job 1: "Staff Engineer — fully remote (US time zones). We sponsor H-1B for the right candidate. $160k–$190k per year." Job 2: "Office Manager — on-site in Denver. We are unable to sponsor work visas.""*
- *"From dataset YOUR_DATASET_ID (my LinkedIn jobs scraper run), list the entry-level remote jobs that mention Python or SQL, with the annual salary in USD."*
- *"Tag this posting and give me the pay as an annual USD figure: "Warehouse Associate, part-time evening shifts, in person at our Dallas warehouse. $18/hour, no experience needed.""*

The agent calls the tool `leoworks--job-posting-classifier` and reads the rows with `get-dataset-items`. Replace `YOUR_DATASET_ID` with a dataset of your own.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

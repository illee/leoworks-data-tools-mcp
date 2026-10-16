# leoworks/company-website-classifier — code examples

Store page: https://apify.com/leoworks/company-website-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
    "icp": "Independent dental practices (not chains)",
    "pages": [
        {
            "url": "https://acme-analytics.example.com/",
            "title": "Acme Analytics - demand forecasting for retailers",
            "text": "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada. Start a 14-day free trial - plans from $49 per month."
        },
        {
            "url": "https://brightsmile-dental.example.org/",
            "title": "Bright Smile Dental - family dentist in Austin, TX",
            "text": "Bright Smile Dental is a family-owned dental practice in South Austin. Dr. Lee and our team offer cleanings, fillings, Invisalign and same-day crowns. New patients welcome - call or book online."
        }
    ]
}

run = client.actor("leoworks/company-website-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["domain", "industry", "customerType", "fitScore", "tier", "reason"]})
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
  "icp": "Independent dental practices (not chains)",
  "pages": [
    {
      "url": "https://acme-analytics.example.com/",
      "title": "Acme Analytics - demand forecasting for retailers",
      "text": "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada. Start a 14-day free trial - plans from $49 per month."
    },
    {
      "url": "https://brightsmile-dental.example.org/",
      "title": "Bright Smile Dental - family dentist in Austin, TX",
      "text": "Bright Smile Dental is a family-owned dental practice in South Austin. Dr. Lee and our team offer cleanings, fillings, Invisalign and same-day crowns. New patients welcome - call or book online."
    }
  ]
};

const run = await client.actor('leoworks/company-website-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["domain", "industry", "customerType", "fitScore", "tier", "reason"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~company-website-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "icp": "Independent dental practices (not chains)",
  "pages": [
    {
      "url": "https://acme-analytics.example.com/",
      "title": "Acme Analytics - demand forecasting for retailers",
      "text": "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada. Start a 14-day free trial - plans from $49 per month."
    },
    {
      "url": "https://brightsmile-dental.example.org/",
      "title": "Bright Smile Dental - family dentist in Austin, TX",
      "text": "Bright Smile Dental is a family-owned dental practice in South Austin. Dr. Lee and our team offer cleanings, fillings, Invisalign and same-day crowns. New patients welcome - call or book online."
    }
  ]
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/company-website-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/company-website-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Does this company fit "B2B software companies selling to retailers"? https://acme-analytics.example.com/ — "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada.""*
- *"Classify the websites in my Website Content Crawler dataset YOUR_DATASET_ID and keep only the companies that fit "Independent dental practices (not chains)", with the fit score and reason."*
- *"Tell me the industry, business type, B2B or B2C and reach of this company from its homepage text: "Bright Smile Dental is a family-owned dental practice in South Austin. Dr. Lee and our team offer cleanings, fillings, Invisalign and same-day crowns. New patients welcome.""*

The agent calls the tool `leoworks--company-website-classifier` and reads the rows with `get-dataset-items`. Replace `YOUR_DATASET_ID` with a dataset of your own.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

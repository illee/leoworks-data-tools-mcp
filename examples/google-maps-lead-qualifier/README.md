# leoworks/google-maps-lead-qualifier — code examples

Store page: https://apify.com/leoworks/google-maps-lead-qualifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

Searches Google Maps for 10 independent cosmetic dentists in Chicago and scores them. About $0.06 all-in (compass' scraper bills part of it to your account).

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
    "icp": "Independent dental practices that offer cosmetic dentistry such as teeth whitening or veneers.",
    "searchQueries": [
        "cosmetic dentist"
    ],
    "location": "Chicago, USA",
    "maxPlacesPerSearch": 10,
    "excludeChains": True
}

run = client.actor("leoworks/google-maps-lead-qualifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["title", "leadScore", "tier", "reason"]})
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
  "icp": "Independent dental practices that offer cosmetic dentistry such as teeth whitening or veneers.",
  "searchQueries": [
    "cosmetic dentist"
  ],
  "location": "Chicago, USA",
  "maxPlacesPerSearch": 10,
  "excludeChains": true
};

const run = await client.actor('leoworks/google-maps-lead-qualifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["title", "leadScore", "tier", "reason"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
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
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/google-maps-lead-qualifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/google-maps-lead-qualifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Find 20 cosmetic dentists in Chicago on Google Maps and score them against this ideal customer: "Dental practices that offer cosmetic dentistry such as veneers or teeth whitening". Show the top 5 with the reason for each score."*
- *"Search Google Maps for "yoga studio" in Austin, USA (15 places), score them for "Independent yoga studios that offer teacher training", skip chains and anything under 4.0 stars, and list the qualified ones with phone and website."*
- *"Take dataset YOUR_DATASET_ID from my Google Maps scraper run and tell me which places are independent gyms that offer personal training, ranked by lead score."*

The agent calls the tool `leoworks--google-maps-lead-qualifier` and reads the rows with `get-dataset-items`. Replace `YOUR_DATASET_ID` with a dataset of your own.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

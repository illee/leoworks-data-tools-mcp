# leoworks/kbeauty-ranking-review-monitor — code examples

Store page: https://apify.com/leoworks/kbeauty-ranking-review-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
    "sources": [
        "oliveyoung_global"
    ],
    "oliveyoungCategories": [
        "skincare"
    ],
    "maxProductsPerRanking": 10,
    "reviewsPerProduct": 20,
    "classifyReviews": True
}

run = client.actor("leoworks/kbeauty-ranking-review-monitor").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["type", "rank", "productName", "brand", "price", "rating"]})
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
  "sources": [
    "oliveyoung_global"
  ],
  "oliveyoungCategories": [
    "skincare"
  ],
  "maxProductsPerRanking": 10,
  "reviewsPerProduct": 20,
  "classifyReviews": true
};

const run = await client.actor('leoworks/kbeauty-ranking-review-monitor').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["type", "rank", "productName", "brand", "price", "rating"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~kbeauty-ranking-review-monitor/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "sources": [
    "oliveyoung_global"
  ],
  "oliveyoungCategories": [
    "skincare"
  ],
  "maxProductsPerRanking": 10,
  "reviewsPerProduct": 20,
  "classifyReviews": true
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/kbeauty-ranking-review-monitor" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/kbeauty-ranking-review-monitor",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Get today's top 10 skincare bestsellers on Olive Young Global with their newest 5 reviews and tell me which products have skin-trouble complaints."*
- *"What are the top 10 Amore Mall bestsellers today, and which of them are Laneige or Sulwhasoo products?"*
- *"Show the top 20 suncare bestsellers on Olive Young Global and how each one's rank changed since the last run."*

The agent calls the tool `leoworks--kbeauty-ranking-review-monitor` and reads the rows with `get-dataset-items`.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

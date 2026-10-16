# leoworks/amazon-review-classifier — code examples

Store page: https://apify.com/leoworks/amazon-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
    "texts": [
        "Stopped charging after two weeks. Returning it.",
        "Fits great but the fabric is see-through when I squat.",
        "Arrived with a cracked screen and no box. Seller never replied.",
        "Exactly as described, sturdy and easy to set up. Bought a second one."
    ],
    "customLabels": [
        "mentions the smell"
    ]
}

run = client.actor("leoworks/amazon-review-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["rating", "complaintTypes", "sentiment", "returnIntent", "action"]})
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
  "texts": [
    "Stopped charging after two weeks. Returning it.",
    "Fits great but the fabric is see-through when I squat.",
    "Arrived with a cracked screen and no box. Seller never replied.",
    "Exactly as described, sturdy and easy to set up. Bought a second one."
  ],
  "customLabels": [
    "mentions the smell"
  ]
};

const run = await client.actor('leoworks/amazon-review-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["rating", "complaintTypes", "sentiment", "returnIntent", "action"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~amazon-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "Stopped charging after two weeks. Returning it.",
    "Fits great but the fabric is see-through when I squat.",
    "Arrived with a cracked screen and no box. Seller never replied.",
    "Exactly as described, sturdy and easy to set up. Bought a second one."
  ],
  "customLabels": [
    "mentions the smell"
  ]
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/amazon-review-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/amazon-review-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Why are buyers returning this product? Classify these Amazon reviews: "Stopped charging after two weeks. Returning it." / "Fits great but the fabric is see-through when I squat." / "Arrived late and the box was crushed, but the product itself is fine.""*
- *"Classify dataset YOUR_DATASET_ID from my Amazon reviews scraper run, only 1–3 star reviews, and list the top 3 return reasons with one example review each."*
- *"Do these Amazon reviews say the buyer returned the product or wants a refund? "Sent it back, the zipper broke." / "Love it, bought a second one." / "Asked for a replacement, it ran small.""*

The agent calls the tool `leoworks--amazon-review-classifier` and reads the rows with `get-dataset-items`. Replace `YOUR_DATASET_ID` with a dataset of your own.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

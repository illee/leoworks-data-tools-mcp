# leoworks/aliexpress-reviews-classifier — code examples

Store page: https://apify.com/leoworks/aliexpress-reviews-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

One AliExpress product, 20 reviews, with AI classification. About $0.04.

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
    "productUrls": [
        "https://www.aliexpress.com/item/1005008549911526.html"
    ],
    "reviewsPerProduct": 20,
    "reviewFilter": "all",
    "classifyReviews": True
}

run = client.actor("leoworks/aliexpress-reviews-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["rating", "country", "textEnglish", "labels"]})
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
  "productUrls": [
    "https://www.aliexpress.com/item/1005008549911526.html"
  ],
  "reviewsPerProduct": 20,
  "reviewFilter": "all",
  "classifyReviews": true
};

const run = await client.actor('leoworks/aliexpress-reviews-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["rating", "country", "textEnglish", "labels"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~aliexpress-reviews-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "productUrls": [
    "https://www.aliexpress.com/item/1005008549911526.html"
  ],
  "reviewsPerProduct": 20,
  "reviewFilter": "all",
  "classifyReviews": true
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/aliexpress-reviews-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/aliexpress-reviews-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Get the latest 50 reviews of https://www.aliexpress.com/item/1005008549911526.html and tell me the main complaints."*
- *"From https://www.aliexpress.com/item/1005008549911526.html fetch 30 reviews with 3 stars or less and list what buyers complain about, including the worst-rated option."*
- *"Get the 40 newest reviews of https://www.aliexpress.com/item/1005008549911526.html that mention "battery" and summarize what buyers say about it."*

The agent calls the tool `leoworks--aliexpress-reviews-classifier` and reads the rows with `get-dataset-items`.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

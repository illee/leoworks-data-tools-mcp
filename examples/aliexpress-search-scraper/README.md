# leoworks/aliexpress-search-scraper — code examples

Store page: https://apify.com/leoworks/aliexpress-search-scraper?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
    "keywords": [
        "wireless earbuds",
        "phone case magsafe",
        "led strip lights"
    ],
    "maxResultsPerKeyword": 60,
    "sort": "orders",
    "country": "US",
    "currency": "USD"
}

run = client.actor("leoworks/aliexpress-search-scraper").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["position", "title", "price", "soldCount", "isAd"]})
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
  "keywords": [
    "wireless earbuds",
    "phone case magsafe",
    "led strip lights"
  ],
  "maxResultsPerKeyword": 60,
  "sort": "orders",
  "country": "US",
  "currency": "USD"
};

const run = await client.actor('leoworks/aliexpress-search-scraper').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["position", "title", "price", "soldCount", "isAd"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~aliexpress-search-scraper/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "keywords": [
    "wireless earbuds",
    "phone case magsafe",
    "led strip lights"
  ],
  "maxResultsPerKeyword": 60,
  "sort": "orders",
  "country": "US",
  "currency": "USD"
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/aliexpress-search-scraper" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/aliexpress-search-scraper",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Search AliExpress for "magsafe phone case", 40 results, and list the 5 best-selling ones with price and rating."*
- *"Track where https://www.aliexpress.com/item/1005008549911526.html ranks on AliExpress for "wireless earbuds" and tell me its rank and whether it moved since the last run."*
- *"For "standing desk converter" on AliExpress, take the top 20 results and tell me the median price, how many are ads, and which listing has the highest sold count."*

The agent calls the tool `leoworks--aliexpress-search-scraper` and reads the rows with `get-dataset-items`.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

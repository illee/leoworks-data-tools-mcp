# leoworks/naver-blog-brand-monitor — code examples

Store page: https://apify.com/leoworks/naver-blog-brand-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
    "queries": [
        "라운드랩 선크림"
    ],
    "brandNames": [
        "라운드랩",
        "Round Lab"
    ],
    "maxPostsPerQuery": 20,
    "sort": "recent"
}

run = client.actor("leoworks/naver-blog-brand-monitor").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["title", "sponsored", "sentiment", "brandMentions"]})
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
  "queries": [
    "라운드랩 선크림"
  ],
  "brandNames": [
    "라운드랩",
    "Round Lab"
  ],
  "maxPostsPerQuery": 20,
  "sort": "recent"
};

const run = await client.actor('leoworks/naver-blog-brand-monitor').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["title", "sponsored", "sentiment", "brandMentions"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~naver-blog-brand-monitor/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "queries": [
    "라운드랩 선크림"
  ],
  "brandNames": [
    "라운드랩",
    "Round Lab"
  ],
  "maxPostsPerQuery": 20,
  "sort": "recent"
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/naver-blog-brand-monitor" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/naver-blog-brand-monitor",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Find the latest 30 Naver Blog posts about 라운드랩 선크림 and tell me how many are sponsored (체험단) and what the self-paid ones say."*
- *"Scrape 50 recent Naver Blog posts about 다이슨 에어랩 후기 and show which ones look sponsored, quoting the evidence sentence."*
- *"Compare 라운드랩 and 토리든 on Naver Blog with 30 posts each — which brand has the larger share of sponsored posts?"*

The agent calls the tool `leoworks--naver-blog-brand-monitor` and reads the rows with `get-dataset-items`.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

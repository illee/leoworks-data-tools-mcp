# leoworks/naver-shopping-rank-tracker — code examples

Store page: https://apify.com/leoworks/naver-shopping-rank-tracker?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
    "targets": [
        {
            "keyword": "무선이어폰",
            "match": "브리츠 공식몰"
        },
        {
            "keyword": "블루투스 이어폰",
            "match": "브리츠 공식몰"
        },
        {
            "keyword": "텀블러",
            "match": "스탠리"
        }
    ],
    "includeAds": True,
    "topCompetitors": 10
}

run = client.actor("leoworks/naver-shopping-rank-tracker").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["keyword", "match", "organicRank", "adRank", "price", "rankChange"]})
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
  "targets": [
    {
      "keyword": "무선이어폰",
      "match": "브리츠 공식몰"
    },
    {
      "keyword": "블루투스 이어폰",
      "match": "브리츠 공식몰"
    },
    {
      "keyword": "텀블러",
      "match": "스탠리"
    }
  ],
  "includeAds": true,
  "topCompetitors": 10
};

const run = await client.actor('leoworks/naver-shopping-rank-tracker').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["keyword", "match", "organicRank", "adRank", "price", "rankChange"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~naver-shopping-rank-tracker/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "targets": [
    {
      "keyword": "무선이어폰",
      "match": "브리츠 공식몰"
    },
    {
      "keyword": "블루투스 이어폰",
      "match": "브리츠 공식몰"
    },
    {
      "keyword": "텀블러",
      "match": "스탠리"
    }
  ],
  "includeAds": true,
  "topCompetitors": 10
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/naver-shopping-rank-tracker" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/naver-shopping-rank-tracker",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Check where 브리츠 공식몰 ranks for 무선이어폰 on Naver Shopping and tell me the price and rating."*
- *"Where does https://search.shopping.naver.com/catalog/56796984706 rank for 무선이어폰 on Naver Shopping, and who are the top 5 competitors?"*
- *"List the top 10 organic products for 선크림 on Naver Shopping with their prices and ratings."*

The agent calls the tool `leoworks--naver-shopping-rank-tracker` and reads the rows with `get-dataset-items`.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

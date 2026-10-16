# leoworks/korean-review-classifier — code examples

Store page: https://apify.com/leoworks/korean-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

Four pasted Korean reviews. About $0.002.

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
        "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요.",
        "한 달도 안 돼서 충전이 안 됩니다. 교환 요청했는데 답이 없어요.",
        "향이 너무 강해서 두통이 와요. 가격 대비 별로입니다.",
        "항상 쓰던 거라 이번에도 재구매했어요. 할인할 때 사니 좋네요!"
    ],
    "customLabels": [
        "mentions the smell"
    ]
}

run = client.actor("leoworks/korean-review-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["text", "labels"]})
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
    "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요.",
    "한 달도 안 돼서 충전이 안 됩니다. 교환 요청했는데 답이 없어요.",
    "향이 너무 강해서 두통이 와요. 가격 대비 별로입니다.",
    "항상 쓰던 거라 이번에도 재구매했어요. 할인할 때 사니 좋네요!"
  ],
  "customLabels": [
    "mentions the smell"
  ]
};

const run = await client.actor('leoworks/korean-review-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["text", "labels"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~korean-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요.",
    "한 달도 안 돼서 충전이 안 됩니다. 교환 요청했는데 답이 없어요.",
    "향이 너무 강해서 두통이 와요. 가격 대비 별로입니다.",
    "항상 쓰던 거라 이번에도 재구매했어요. 할인할 때 사니 좋네요!"
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
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/korean-review-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/korean-review-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Classify these Korean reviews and tell me the top complaint types: "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요." / "냄새가 너무 독해서 두통이 와요." / "가격 대비 만족, 재구매 의사 있습니다.""*
- *"Which of these Coupang reviews mention skin trouble, and what made each buyer purchase? "바르자마자 얼굴이 빨개지고 따가웠어요. 환불하고 싶어요." / "선물용으로 샀는데 포장이 예뻐서 좋아요.""*
- *"Run a Korean review sentiment analysis on dataset YOUR_DATASET_ID from my Coupang scraper run and summarize the complaints by product."*

The agent calls the tool `leoworks--korean-review-classifier` and reads the rows with `get-dataset-items`. Replace `YOUR_DATASET_ID` with a dataset of your own.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

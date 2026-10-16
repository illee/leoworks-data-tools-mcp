# leoworks/japanese-review-classifier — code examples

Store page: https://apify.com/leoworks/japanese-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
        "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。",
        "すぐ壊れました。充電できません。返品したいです。",
        "注文から届くまで10日もかかりました。連絡も一切ありません。",
        "品質が良くて3回目のリピートです。セール中に買えて満足しています。"
    ],
    "customLabels": [
        "mentions the smell"
    ]
}

run = client.actor("leoworks/japanese-review-classifier").call(run_input=run_input)
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
    "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。",
    "すぐ壊れました。充電できません。返品したいです。",
    "注文から届くまで10日もかかりました。連絡も一切ありません。",
    "品質が良くて3回目のリピートです。セール中に買えて満足しています。"
  ],
  "customLabels": [
    "mentions the smell"
  ]
};

const run = await client.actor('leoworks/japanese-review-classifier').call(input);
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
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~japanese-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。",
    "すぐ壊れました。充電できません。返品したいです。",
    "注文から届くまで10日もかかりました。連絡も一切ありません。",
    "品質が良くて3回目のリピートです。セール中に買えて満足しています。"
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
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/japanese-review-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/japanese-review-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Classify these Japanese reviews and tell me the top complaint types: "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。" / "すぐ壊れました。充電できません。返品したいです。""*
- *"What do these Rakuten reviews complain about? "サイズが小さすぎて着られませんでした。" / "配送が遅く、予定日より5日遅れました。""*
- *"Run a Japanese review sentiment analysis on dataset YOUR_DATASET_ID from my Rakuten reviews scraper run and summarize the complaints."*

The agent calls the tool `leoworks--japanese-review-classifier` and reads the rows with `get-dataset-items`. Replace `YOUR_DATASET_ID` with a dataset of your own.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

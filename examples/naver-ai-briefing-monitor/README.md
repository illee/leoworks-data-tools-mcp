# leoworks/naver-ai-briefing-monitor — code examples

Store page: https://apify.com/leoworks/naver-ai-briefing-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
        "콜라겐 효과",
        "선크림 추천 지성",
        "세라마이드 크림 효능",
        "레티놀 부작용"
    ],
    "brandNames": [
        "라운드랩"
    ],
    "competitorNames": [
        "아누아",
        "토리든"
    ]
}

run = client.actor("leoworks/naver-ai-briefing-monitor").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["query", "hasBriefing", "brandMentions", "citations"]})
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
    "콜라겐 효과",
    "선크림 추천 지성",
    "세라마이드 크림 효능",
    "레티놀 부작용"
  ],
  "brandNames": [
    "라운드랩"
  ],
  "competitorNames": [
    "아누아",
    "토리든"
  ]
};

const run = await client.actor('leoworks/naver-ai-briefing-monitor').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["query", "hasBriefing", "brandMentions", "citations"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~naver-ai-briefing-monitor/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "queries": [
    "콜라겐 효과",
    "선크림 추천 지성",
    "세라마이드 크림 효능",
    "레티놀 부작용"
  ],
  "brandNames": [
    "라운드랩"
  ],
  "competitorNames": [
    "아누아",
    "토리든"
  ]
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/naver-ai-briefing-monitor" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/naver-ai-briefing-monitor",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Check whether 다이슨 is mentioned in Naver's AI briefing for 무선청소기 추천 2026 and list the cited sources."*
- *"Check Naver's AI briefing for 콜라겐 효과 and 전기포트 세척 방법 and tell me which blogs and sites it cites."*
- *"For the query 에어프라이어 추천, does Naver's AI briefing mention 쿠쿠 or 필립스, and is either of them recommended?"*

The agent calls the tool `leoworks--naver-ai-briefing-monitor` and reads the rows with `get-dataset-items`.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

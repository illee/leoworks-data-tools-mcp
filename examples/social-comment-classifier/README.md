# leoworks/social-comment-classifier — code examples

Store page: https://apify.com/leoworks/social-comment-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
        "Where can I buy this in Canada? Need it!!",
        "Ordered 3 weeks ago and still nothing. Is anyone answering messages?",
        "Can you make this in black? I would buy two.",
        "DM me to earn $500 a day from home 💰💰",
        "Love this, the colors are perfect 😍"
    ],
    "customLabels": [
        "asks about shipping"
    ]
}

run = client.actor("leoworks/social-comment-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["text", "type", "sentiment", "needsReply"]})
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
    "Where can I buy this in Canada? Need it!!",
    "Ordered 3 weeks ago and still nothing. Is anyone answering messages?",
    "Can you make this in black? I would buy two.",
    "DM me to earn $500 a day from home 💰💰",
    "Love this, the colors are perfect 😍"
  ],
  "customLabels": [
    "asks about shipping"
  ]
};

const run = await client.actor('leoworks/social-comment-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["text", "type", "sentiment", "needsReply"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~social-comment-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "Where can I buy this in Canada? Need it!!",
    "Ordered 3 weeks ago and still nothing. Is anyone answering messages?",
    "Can you make this in black? I would buy two.",
    "DM me to earn $500 a day from home 💰💰",
    "Love this, the colors are perfect 😍"
  ],
  "customLabels": [
    "asks about shipping"
  ]
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/social-comment-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/social-comment-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Which of these comments are from people who want to buy? "Where can I buy this in Canada? Need it!!" / "Ordered 3 weeks ago and still nothing. Is anyone answering messages?" / "Love the colour 😍""*
- *"Classify dataset YOUR_DATASET_ID from my TikTok comments scraper run and list the unanswered questions and complaints first."*
- *"Which of these Instagram comments are spam and which need a reply? "Follow me for free gift cards!!" / "Does it come in size L?" / "Not working, I want my money back.""*

The agent calls the tool `leoworks--social-comment-classifier` and reads the rows with `get-dataset-items`. Replace `YOUR_DATASET_ID` with a dataset of your own.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

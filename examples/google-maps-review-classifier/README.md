# leoworks/google-maps-review-classifier — code examples

Store page: https://apify.com/leoworks/google-maps-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

Two New York places by Google Maps place ID. About $0.05 all-in (compass' Google Maps scraper bills about $0.03 to your account on top of this Actor).

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
    "places": [
        "ChIJifIePKtZwokRVZ-UdRGkZzs",
        "ChIJCar0f49ZwokR6ozLV-dHNTE"
    ],
    "maxReviewsPerPlace": 20
}

run = client.actor("leoworks/google-maps-review-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["rating", "sentiment", "complaintTypes", "needsReply", "alert"]})
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
  "places": [
    "ChIJifIePKtZwokRVZ-UdRGkZzs",
    "ChIJCar0f49ZwokR6ozLV-dHNTE"
  ],
  "maxReviewsPerPlace": 20
};

const run = await client.actor('leoworks/google-maps-review-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["rating", "sentiment", "complaintTypes", "needsReply", "alert"].map((k) => [k, item[k]])));
}
```

## curl

```bash
bash example.sh
```

```bash
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~google-maps-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "places": [
    "ChIJifIePKtZwokRVZ-UdRGkZzs",
    "ChIJCar0f49ZwokR6ozLV-dHNTE"
  ],
  "maxReviewsPerPlace": 20
}
JSON
```

## From an AI agent (MCP)

Add the Apify MCP server with this Actor as a tool — Claude Code:

```bash
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/google-maps-review-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/google-maps-review-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Analyze the Google Maps reviews of Joe's Pizza Broadway in New York (place ID ChIJifIePKtZwokRVZ-UdRGkZzs): classify the newest 20 reviews, tell me the top complaint types and which reviews have no owner reply yet."*
- *"Compare Joe's Pizza Broadway (ChIJifIePKtZwokRVZ-UdRGkZzs) and Katz's Delicatessen (ChIJCar0f49ZwokR6ozLV-dHNTE) using 20 newest reviews each — which one has more serious-issue alerts, and what do customers praise at each?"*
- *"Classify these Google reviews and tell me which ones need an owner reply: "Waited 50 minutes and nobody apologised." / "Best slice in town, will be back." / "They charged my card twice and ignored my emails.""*

The agent calls the tool `leoworks--google-maps-review-classifier` and reads the rows with `get-dataset-items`.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

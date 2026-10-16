# leoworks/spanish-review-classifier — code examples

Store page: https://apify.com/leoworks/spanish-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=code-examples

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
        "El paquete llegó aplastado y uno de los auriculares no funciona.",
        "Tardó dos semanas en llegar y el vendedor no contesta los mensajes.",
        "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!",
        "La talla no corresponde, me quedó pequeño. Quiero devolverlo."
    ],
    "customLabels": [
        "mentions the smell"
    ]
}

run = client.actor("leoworks/spanish-review-classifier").call(run_input=run_input)
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
    "El paquete llegó aplastado y uno de los auriculares no funciona.",
    "Tardó dos semanas en llegar y el vendedor no contesta los mensajes.",
    "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!",
    "La talla no corresponde, me quedó pequeño. Quiero devolverlo."
  ],
  "customLabels": [
    "mentions the smell"
  ]
};

const run = await client.actor('leoworks/spanish-review-classifier').call(input);
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
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~spanish-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "El paquete llegó aplastado y uno de los auriculares no funciona.",
    "Tardó dos semanas en llegar y el vendedor no contesta los mensajes.",
    "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!",
    "La talla no corresponde, me quedó pequeño. Quiero devolverlo."
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
claude mcp add --transport http apify "https://mcp.apify.com?tools=leoworks/spanish-review-classifier" --header "Authorization: Bearer $APIFY_TOKEN"
```

Cursor or Claude Desktop (`mcp.json`):

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=leoworks/spanish-review-classifier",
      "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" }
    }
  }
}
```

Then ask, for example:

- *"Classify these Spanish reviews and tell me the top complaint types: "El paquete llegó aplastado y uno de los auriculares no funciona." / "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!""*
- *"Are these MercadoLibre reviews about delivery, quality or price? "Tardó 15 días en llegar." / "Es más caro que en otras tiendas pero la calidad es buena.""*
- *"Run a Spanish review sentiment analysis on dataset YOUR_DATASET_ID from my MercadoLibre reviews scraper run and summarize the complaints."*

The agent calls the tool `leoworks--spanish-review-classifier` and reads the rows with `get-dataset-items`. Replace `YOUR_DATASET_ID` with a dataset of your own.

Runs happen in your Apify account and are billed per result (see the Store page). Independent tool — not affiliated with the data sources it names.

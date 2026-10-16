# Spanish Review Classifier — sentiment & complaints

`leoworks--spanish-review-classifier` · Apify actor [leoworks/spanish-review-classifier](https://apify.com/leoworks/spanish-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

**Code examples** (Python · JavaScript · curl · MCP config): [`examples/spanish-review-classifier/`](../examples/spanish-review-classifier/README.md)

Classify Spanish customer reviews — MercadoLibre (reseñas y opiniones), AliExpress and any review scraper's dataset — into complaint types, sentiment and purchase motive with probabilities. Spanish review sentiment analysis (análisis de reseñas), no prompts, no LLM key. Beta.

**People ask for this as:** *Spanish review sentiment analysis* · *MercadoLibre reviews* · *classify Spanish reviews*

## Ask your AI agent

1. Classify these Spanish reviews and tell me the top complaint types: "El paquete llegó aplastado y uno de los auriculares no funciona." / "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!"
2. Are these MercadoLibre reviews about delivery, quality or price? "Tardó 15 días en llegar." / "Es más caro que en otras tiendas pero la calidad es buena."
3. Run a Spanish review sentiment analysis on dataset YOUR_DATASET_ID from my MercadoLibre reviews scraper run and summarize the complaints.

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/spanish-review-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "texts": [
    "El paquete llegó aplastado y uno de los auriculares no funciona.",
    "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!"
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-15`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "index": 2,
    "text": "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!",
    "rating": null,
    "labels": {
      "complaint": [
        {
          "label": "none",
          "labelEs": "sin queja",
          "probability": 0.98
        }
      ],
      "sentiment": {
        "label": "positive",
        "labelEs": "positivo",
        "probability": 1,
        "confidence": 1
      },
      "motive": {
        "label": "repurchase",
        "labelEs": "recompra",
        "probability": 0.94,
        "confidence": 0.93
      },
      "custom": [
        {
          "label": "mentions the smell",
          "probability": 0.01,
          "matched": false
        }
      ],
      "complaintScores": [
        {
          "label": "delivery",
          "labelEs": "envío",
          "probability": 0.01
        },
        {
          "label": "quality_defect",
          "labelEs": "calidad / defecto",
          "probability": 0.01
        },
        {
          "label": "size_fit",
          "labelEs": "talla / tamaño",
          "probability": 0.01
        }
      ]
    },
    "model": "jev-1.13.0"
  },
  {
    "index": 1,
    "text": "Tardó dos semanas en llegar y el vendedor no contesta los mensajes.",
    "rating": null,
    "labels": {
      "complaint": [
        {
          "label": "delivery",
          "labelEs": "envío",
          "probability": 0.98
        },
        {
          "label": "customer_service",
          "labelEs": "atención al cliente",
          "probability": 0.95
        }
      ],
      "sentiment": {
        "label": "negative",
        "labelEs": "negativo",
        "probability": 1,
        "confidence": 1
      },
      "motive": {
        "label": "unknown",
        "labelEs": "desconocido",
        "probability": 1,
        "confidence": 1
      },
      "custom": [
        {
          "label": "mentions the smell",
          "probability": 0.01,
          "matched": false
        }
      ],
      "complaintScores": [
        {
          "label": "delivery",
          "labelEs": "envío",
          "probability": 0.98
        },
        {
          "label": "quality_defect",
          "labelEs": "calidad / defecto",
          "probability": 0.03
        },
        {
          "label": "size_fit",
          "labelEs": "talla / tamaño",
          "probability": 0.01
        }
      ]
    },
    "model": "jev-1.13.0"
  }
]
```

## Price

$0.50 / 1,000 reviews (beta). Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/spanish-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

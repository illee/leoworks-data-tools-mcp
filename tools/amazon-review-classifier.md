# Amazon Review Classifier — complaints & returns

`leoworks--amazon-review-classifier` · Apify actor [leoworks/amazon-review-classifier](https://apify.com/leoworks/amazon-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

Classify Amazon reviews from any Amazon reviews scraper: complaint and return reasons, what buyers praise, sentiment, star-vs-text mismatch and worst variants — plus an action queue and per-product CSV. No LLM key.

**People ask for this as:** *Amazon review analysis* · *Amazon review classifier* · *Amazon return reasons*

## Ask your AI agent

1. Why are buyers returning this product? Classify these Amazon reviews: "Stopped charging after two weeks. Returning it." / "Fits great but the fabric is see-through when I squat." / "Arrived late and the box was crushed, but the product itself is fine."
2. Classify dataset YOUR_DATASET_ID from my Amazon reviews scraper run, only 1–3 star reviews, and list the top 3 return reasons with one example review each.
3. Do these Amazon reviews say the buyer returned the product or wants a refund? "Sent it back, the zipper broke." / "Love it, bought a second one." / "Asked for a replacement, it ran small."

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/amazon-review-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "texts": [
    "Stopped charging after two weeks. Returning it.",
    "Fits great but the fabric is see-through when I squat."
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-15`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "index": 0,
    "rating": null,
    "text": "Stopped charging after two weeks. Returning it.",
    "complaintTypes": "defect",
    "praiseTypes": "",
    "sentiment": "negative",
    "returnIntent": true,
    "action": true,
    "customLabelsMatched": "",
    "labels": {
      "complaint": [
        {
          "label": "defect",
          "probability": 0.95
        }
      ],
      "sentiment": {
        "label": "negative",
        "probability": 1,
        "confidence": 1
      },
      "returnIntent": {
        "probability": 0.99,
        "matched": true
      },
      "praise": [],
      "custom": [
        {
          "label": "mentions the smell",
          "probability": 0.01,
          "matched": false
        }
      ],
      "complaintScores": [
        {
          "label": "defect",
          "probability": 0.95
        },
        {
          "label": "not_as_described",
          "probability": 0.1
        },
        {
          "label": "size_fit",
          "probability": 0.02
        }
      ]
    },
    "model": "jev-1.13.0"
  },
  {
    "index": 2,
    "rating": null,
    "text": "Arrived with a cracked screen and no box. Seller never replied.",
    "complaintTypes": "defect, shipping, not_as_described",
    "praiseTypes": "",
    "sentiment": "negative",
    "returnIntent": false,
    "action": true,
    "customLabelsMatched": "",
    "labels": {
      "complaint": [
        {
          "label": "defect",
          "probability": 0.95
        },
        {
          "label": "shipping",
          "probability": 0.91
        },
        {
          "label": "not_as_described",
          "probability": 0.84
        }
      ],
      "sentiment": {
        "label": "negative",
        "probability": 1,
        "confidence": 1
      },
      "returnIntent": {
        "probability": 0.05,
        "matched": false
      },
      "praise": [],
      "custom": [
        {
          "label": "mentions the smell",
          "probability": 0.01,
          "matched": false
        }
      ],
      "complaintScores": [
        {
          "label": "defect",
          "probability": 0.95
        },
        {
          "label": "not_as_described",
          "probability": 0.84
        },
        {
          "label": "size_fit",
          "probability": 0.02
        }
      ]
    },
    "model": "jev-1.13.0"
  }
]
```

## Price

$0.50 / 1,000 reviews. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/amazon-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

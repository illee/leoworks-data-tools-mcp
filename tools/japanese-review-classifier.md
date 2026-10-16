# Japanese Review Classifier — sentiment & complaints

`leoworks--japanese-review-classifier` · Apify actor [leoworks/japanese-review-classifier](https://apify.com/leoworks/japanese-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

**Code examples** (Python · JavaScript · curl · MCP config): [`examples/japanese-review-classifier/`](../examples/japanese-review-classifier/README.md)

Classify Japanese customer reviews — Rakuten (楽天レビュー), Amazon.co.jp and any review scraper's dataset — into complaint types, sentiment and purchase motive with probabilities. Japanese review sentiment analysis (レビュー分析), no prompts, no LLM key.

**People ask for this as:** *Japanese review sentiment analysis* · *Rakuten reviews* · *classify Japanese reviews*

## Ask your AI agent

1. Classify these Japanese reviews and tell me the top complaint types: "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。" / "すぐ壊れました。充電できません。返品したいです。"
2. What do these Rakuten reviews complain about? "サイズが小さすぎて着られませんでした。" / "配送が遅く、予定日より5日遅れました。"
3. Run a Japanese review sentiment analysis on dataset YOUR_DATASET_ID from my Rakuten reviews scraper run and summarize the complaints.

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/japanese-review-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "texts": [
    "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。",
    "すぐ壊れました。充電できません。返品したいです。"
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-15`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "index": 0,
    "text": "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。",
    "rating": null,
    "labels": {
      "complaint": [
        {
          "label": "packaging",
          "labelJa": "梱包",
          "probability": 0.97
        }
      ],
      "sentiment": {
        "label": "neutral",
        "labelJa": "中立",
        "probability": 0.75,
        "confidence": 0.62
      },
      "motive": {
        "label": "unknown",
        "labelJa": "不明",
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
          "labelJa": "配送",
          "probability": 0.1
        },
        {
          "label": "quality_defect",
          "labelJa": "品質・不良",
          "probability": 0.05
        },
        {
          "label": "size_fit",
          "labelJa": "サイズ・フィット",
          "probability": 0.03
        }
      ]
    },
    "model": "jev-1.13.0"
  },
  {
    "index": 3,
    "text": "品質が良くて3回目のリピートです。セール中に買えて満足しています。",
    "rating": null,
    "labels": {
      "complaint": [
        {
          "label": "none",
          "labelJa": "不満なし",
          "probability": 0.98
        }
      ],
      "sentiment": {
        "label": "positive",
        "labelJa": "肯定",
        "probability": 1,
        "confidence": 1
      },
      "motive": {
        "label": "repurchase",
        "labelJa": "リピート",
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
          "labelJa": "配送",
          "probability": 0.02
        },
        {
          "label": "quality_defect",
          "labelJa": "品質・不良",
          "probability": 0.01
        },
        {
          "label": "size_fit",
          "labelJa": "サイズ・フィット",
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

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/japanese-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

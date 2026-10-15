# AliExpress Reviews Scraper — AI complaints, no login

`leoworks--aliexpress-reviews-classifier` · Apify actor [leoworks/aliexpress-reviews-classifier](https://apify.com/leoworks/aliexpress-reviews-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

Scrape AliExpress product reviews — text, English translation, star rating, date, buyer country, option (SKU) and photos — from any product URL. Optional AI classification adds complaint types, sentiment and purchase motive, plus a per-product summary. No login.

**People ask for this as:** *AliExpress reviews scraper* · *AliExpress review analysis* · *AliExpress review complaints*

## Ask your AI agent

1. Get the latest 50 reviews of https://www.aliexpress.com/item/1005008549911526.html and tell me the main complaints.
2. From https://www.aliexpress.com/item/1005008549911526.html fetch 30 reviews with 3 stars or less and list what buyers complain about, including the worst-rated option.
3. Get the 40 newest reviews of https://www.aliexpress.com/item/1005008549911526.html that mention "battery" and summarize what buyers say about it.

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/aliexpress-reviews-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "productUrls": [
    "https://www.aliexpress.com/item/1005008549911526.html"
  ],
  "reviewsPerProduct": 20
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-05`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "type": "review",
    "productId": "1005008549911526",
    "productUrl": "https://www.aliexpress.com/item/1005008549911526.html",
    "reviewId": "30103494823902535",
    "rating": 1,
    "date": "2026-05-08",
    "country": "US",
    "text": "прийшло повністю пошкрябане і наче уже було в користуванні",
    "textEnglish": "It arrived completely scratched and as if it had already been used.",
    "option": "Color:black",
    "aspects": [
      {
        "aspect": "Quality of sound",
        "value": "Poor"
      },
      {
        "aspect": "Durability",
        "value": "Poor"
      },
      {
        "aspect": "User Friendly",
        "value": "Difficult"
      }
    ],
    "helpfulVotes": 0,
    "additionalReview": null,
    "logistics": "AliExpress Selection Standard Shipping",
    "language": "other",
    "labels": {
      "complaint": [
        {
          "label": "quality_defect",
          "labelKo": "품질·불량",
          "probability": 0.98
        }
      ],
      "sentiment": {
        "label": "negative",
        "labelKo": "부정",
        "probability": 1,
        "confidence": 1
      },
      "motive": {
        "label": "unknown",
        "labelKo": "알 수 없음",
        "probability": 1,
        "confidence": 1
      }
    },
    "classifiedFrom": "english_translation"
  },
  {
    "type": "review",
    "productId": "1005008549911526",
    "productUrl": "https://www.aliexpress.com/item/1005008549911526.html",
    "reviewId": "30096070916547244",
    "rating": 5,
    "date": "2025-11-05",
    "country": "ES",
    "text": "están muy bien, me lo regaló el huerto mágico, se oye nítido, la entrega muy rápida, muy bien embalado, los auriculares son un poquito grandes, tengo las orejas pequeñas, espero que se me sujeten bien y no los pierda. Gracias AliExpress",
    "textEnglish": "They are very good, the magical garden gave them to me, they sound clear, the delivery was very fast, very well packaged, the headphones are a bit big, I have small ears, I hope they fit well and I don't lose them. Thank you, AliExpress.",
    "option": "Color:black",
    "aspects": [
      {
        "aspect": "Quality of sound",
        "value": "Fast"
      },
      {
        "aspect": "Durability",
        "value": "Fits ok"
      },
      {
        "aspect": "User Friendly",
        "value": "Good"
      }
    ],
    "helpfulVotes": 2,
    "additionalReview": null,
    "logistics": "Aliexpress Selection Premium shipping",
    "language": "other",
    "labels": {
      "complaint": [
        {
          "label": "size_fit",
          "labelKo": "사이즈·핏",
          "probability": 0.9
        }
      ],
      "sentiment": {
        "label": "positive",
        "labelKo": "긍정",
        "probability": 1,
        "confidence": 1
      },
      "motive": {
        "label": "unknown",
        "labelKo": "알 수 없음",
        "probability": 0.96,
        "confidence": 0.95
      }
    },
    "classifiedFrom": "english_translation"
  }
]
```

## Price

$1.50 / 1,000 reviews + $0.50 / 1,000 classifications. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/aliexpress-reviews-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

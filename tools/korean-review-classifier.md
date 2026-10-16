# Korean Review Classifier — sentiment & complaint type

`leoworks--korean-review-classifier` · Apify actor [leoworks/korean-review-classifier](https://apify.com/leoworks/korean-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

**Code examples** (Python · JavaScript · curl · MCP config): [`examples/korean-review-classifier/`](../examples/korean-review-classifier/README.md)

Classify Korean customer reviews — Coupang reviews (쿠팡 리뷰), Olive Young reviews, Naver Shopping and Naver Place reviews — into complaint types, sentiment and purchase motive with probabilities. Korean review sentiment analysis for any review scraper's dataset — no scraping, no prompt writing.

**People ask for this as:** *Korean review sentiment analysis* · *classify Korean reviews* · *Coupang review analysis*

## Ask your AI agent

1. Classify these Korean reviews and tell me the top complaint types: "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요." / "냄새가 너무 독해서 두통이 와요." / "가격 대비 만족, 재구매 의사 있습니다."
2. Which of these Coupang reviews mention skin trouble, and what made each buyer purchase? "바르자마자 얼굴이 빨개지고 따가웠어요. 환불하고 싶어요." / "선물용으로 샀는데 포장이 예뻐서 좋아요."
3. Run a Korean review sentiment analysis on dataset YOUR_DATASET_ID from my Coupang scraper run and summarize the complaints by product.

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/korean-review-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "texts": [
    "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요.",
    "항상 쓰던 거라 이번에도 재구매했어요. 할인할 때 사니 좋네요!"
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-04`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "index": 1,
    "text": "한 달도 안 돼서 충전이 안 됩니다. 교환 요청했는데 답이 없어요.",
    "rating": null,
    "labels": {
      "complaint": [
        {
          "label": "quality_defect",
          "labelKo": "품질·불량",
          "probability": 0.95
        },
        {
          "label": "customer_service",
          "labelKo": "고객 응대",
          "probability": 0.92
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
          "labelKo": "배송",
          "probability": 0.02
        },
        {
          "label": "quality_defect",
          "labelKo": "품질·불량",
          "probability": 0.95
        },
        {
          "label": "size_fit",
          "labelKo": "사이즈·핏",
          "probability": 0.02
        }
      ]
    },
    "model": "jev-1.13.0"
  },
  {
    "index": 0,
    "text": "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요.",
    "rating": null,
    "labels": {
      "complaint": [
        {
          "label": "packaging",
          "labelKo": "포장",
          "probability": 0.97
        },
        {
          "label": "delivery",
          "labelKo": "배송",
          "probability": 0.96
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
          "labelKo": "배송",
          "probability": 0.96
        },
        {
          "label": "quality_defect",
          "labelKo": "품질·불량",
          "probability": 0.42
        },
        {
          "label": "size_fit",
          "labelKo": "사이즈·핏",
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

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/korean-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

# OliveYoung Global & Amore Mall Rankings + Reviews

`leoworks--kbeauty-ranking-review-monitor` · Apify actor [leoworks/kbeauty-ranking-review-monitor](https://apify.com/leoworks/kbeauty-ranking-review-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

**Code examples** (Python · JavaScript · curl · MCP config): [`examples/kbeauty-ranking-review-monitor/`](../examples/kbeauty-ranking-review-monitor/README.md)

Track K-beauty bestseller rankings on Olive Young Global (OliveYoung, 올리브영) and Amorepacific's Amore Mall (아모레몰: Sulwhasoo, Laneige, Hera…) and collect Korean cosmetics reviews with optional AI classification — complaint types, sentiment and purchase motive in Korean, English and Japanese.

**People ask for this as:** *Olive Young rankings* · *K-beauty bestsellers* · *Amore Mall*

## Ask your AI agent

1. Get today's top 10 skincare bestsellers on Olive Young Global with their newest 5 reviews and tell me which products have skin-trouble complaints.
2. What are the top 10 Amore Mall bestsellers today, and which of them are Laneige or Sulwhasoo products?
3. Show the top 20 suncare bestsellers on Olive Young Global and how each one's rank changed since the last run.

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/kbeauty-ranking-review-monitor
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "sources": [
    "oliveyoung_global"
  ],
  "maxProductsPerRanking": 5,
  "reviewsPerProduct": 5
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-04`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "type": "ranking",
    "surface": "oliveyoung_global",
    "ranking": "bestsellers",
    "category": "All",
    "rank": 1,
    "productId": "GA240824996",
    "productName": "MEDIHEAL Essential Mask Sheet 10ea Set (+1ea) (OY-Exclusive) (7 Options)",
    "productNameKo": "메디힐 마데카소사이드 에센셜 마스크 흔적 리페어 10매 (+1매 증정기획) (OY단독)",
    "brand": "MEDIHEAL",
    "brandKo": "메디힐",
    "price": 13.5,
    "originalPrice": 27,
    "discountPercent": 50,
    "currency": "USD",
    "rating": 4.9,
    "reviewCount": 7761,
    "inStock": true,
    "productUrl": "https://global.oliveyoung.com/product/detail?prdtNo=GA240824996",
    "previousRank": 1,
    "rankChange": 0,
    "isNew": false,
    "previousCheckedAt": "2026-10-04T08:45:52.114Z",
    "checkedAt": "2026-10-04T08:51:02.737Z",
    "checkedAtKst": "2026-10-04 17:51:02 KST"
  },
  {
    "type": "ranking",
    "surface": "oliveyoung_global",
    "ranking": "bestsellers",
    "category": "All",
    "rank": 2,
    "productId": "GA240423305",
    "productName": "FOODOLOGY Coleology Cutting Jelly 30 Sticks (30-day supply)",
    "productNameKo": "콜레올로지 컷팅 젤리 30포 (30일분)",
    "brand": "FOODOLOGY",
    "brandKo": "푸드올로지",
    "price": 45.21,
    "originalPrice": 61.75,
    "discountPercent": 26.79,
    "currency": "USD",
    "rating": 4.7,
    "reviewCount": 2145,
    "inStock": true,
    "productUrl": "https://global.oliveyoung.com/product/detail?prdtNo=GA240423305",
    "previousRank": 2,
    "rankChange": 0,
    "isNew": false,
    "previousCheckedAt": "2026-10-04T08:45:52.114Z",
    "checkedAt": "2026-10-04T08:51:02.737Z",
    "checkedAtKst": "2026-10-04 17:51:02 KST"
  }
]
```

## Price

$2 / 1,000 ranking rows · $1 / 1,000 reviews · $0.50 / 1,000 classifications. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/kbeauty-ranking-review-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

# Naver Shopping Rank Tracker — Smartstore rank, no login

`leoworks--naver-shopping-rank-tracker` · Apify actor [leoworks/naver-shopping-rank-tracker](https://apify.com/leoworks/naver-shopping-rank-tracker?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

Track where your products, URLs or Smartstore stores rank in Naver Shopping search for any Korean keyword (네이버 쇼핑 순위, 스마트스토어 순위). Organic rank 1–35 plus ad slot position, price, reviews and rating — a Naver Shopping scraper built for scheduled rank monitoring.

**People ask for this as:** *Naver Shopping rank* · *Smartstore rank tracker* · *Naver Shopping rank tracker*

## Ask your AI agent

1. Check where 브리츠 공식몰 ranks for 무선이어폰 on Naver Shopping and tell me the price and rating.
2. Where does https://search.shopping.naver.com/catalog/56796984706 rank for 무선이어폰 on Naver Shopping, and who are the top 5 competitors?
3. List the top 10 organic products for 선크림 on Naver Shopping with their prices and ratings.

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/naver-shopping-rank-tracker
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "targets": [
    {
      "keyword": "무선이어폰",
      "match": "브리츠 공식몰"
    },
    {
      "keyword": "무선이어폰",
      "match": "https://search.shopping.naver.com/catalog/56796984706"
    }
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-04`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "keyword": "무선이어폰",
    "match": "브리츠 공식몰",
    "matchType": "store",
    "surface": "naver_integrated_search_shopping",
    "found": true,
    "organicRank": 10,
    "previousOrganicRank": 11,
    "rankChange": 1,
    "isNew": false,
    "previousCheckedAt": "2026-10-04T04:53:55.783Z",
    "adRank": null,
    "superPointRank": null,
    "visualPosition": 34,
    "page": 4,
    "matchedProductId": "11415194123",
    "nvMid": "88959704488",
    "price": 39900,
    "storeName": "브리츠 공식몰",
    "title": "브리츠 오픈형 블루투스 이어폰 귀찌 러닝 귀걸이형 이어커프 무선 이어폰 이어클립",
    "reviewCount": 5526,
    "rating": 4.68,
    "purchaseCount": 3714,
    "isCatalog": false,
    "productUrl": "https://m.smartstore.naver.com/main/products/11415194123",
    "categoryId": "50024439",
    "depthAvailable": 30,
    "notFoundWithin": null,
    "adSlotsOnPage": 50,
    "searchUrl": "https://m.search.naver.com/search.naver?where=m_shop&query=%EB%AC%B4%EC%84%A0%EC%9D%B4%EC%96%B4%ED%8F%B0",
    "checkedAt": "2026-10-04T08:50:56.628Z",
    "checkedAtKst": "2026-10-04 17:50:56 KST"
  },
  {
    "keyword": "무선이어폰",
    "match": "https://search.shopping.naver.com/catalog/56796984706",
    "matchType": "productId",
    "surface": "naver_integrated_search_shopping",
    "found": true,
    "organicRank": 2,
    "previousOrganicRank": null,
    "rankChange": null,
    "isNew": null,
    "previousCheckedAt": null,
    "adRank": null,
    "superPointRank": null,
    "visualPosition": 8,
    "page": 1,
    "matchedProductId": "56796984706",
    "nvMid": "56796984706",
    "price": 130830,
    "storeName": null,
    "title": "삼성전자 갤럭시 무선이어폰 버즈3 FE SM-R420N 커널형 노이즈캔슬링 그레이",
    "reviewCount": 8263,
    "rating": 4.9,
    "purchaseCount": 0,
    "isCatalog": true,
    "productUrl": "https://search.shopping.naver.com/catalog/56796984706",
    "categoryId": "50024439",
    "depthAvailable": 30,
    "notFoundWithin": null,
    "adSlotsOnPage": 50,
    "searchUrl": "https://m.search.naver.com/search.naver?where=m_shop&query=%EB%AC%B4%EC%84%A0%EC%9D%B4%EC%96%B4%ED%8F%B0",
    "checkedAt": "2026-10-04T08:50:56.628Z",
    "checkedAtKst": "2026-10-04 17:50:56 KST"
  }
]
```

## Price

$3 / 1,000 keyword checks (+$0.50 / 1,000 competitor rows). Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/naver-shopping-rank-tracker?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

# AliExpress Scraper — search results, prices & rank

`leoworks--aliexpress-search-scraper` · Apify actor [leoworks/aliexpress-search-scraper](https://apify.com/leoworks/aliexpress-search-scraper?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

Scrape AliExpress search results for any keyword — rank, title, price, discount, sold count, rating, ship-from and ads flagged — up to 60 pages. Rank mode tracks where your products rank for each keyword over time. No login.

**People ask for this as:** *AliExpress search scraper* · *AliExpress rank tracker* · *AliExpress price and sold count*

## Ask your AI agent

1. Search AliExpress for "magsafe phone case", 40 results, and list the 5 best-selling ones with price and rating.
2. Track where https://www.aliexpress.com/item/1005008549911526.html ranks on AliExpress for "wireless earbuds" and tell me its rank and whether it moved since the last run.
3. For "standing desk converter" on AliExpress, take the top 20 results and tell me the median price, how many are ads, and which listing has the highest sold count.

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/aliexpress-search-scraper
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "keywords": [
    "wireless earbuds"
  ],
  "maxResultsPerKeyword": 20
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-05`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "type": "result",
    "keyword": "wireless earbuds",
    "page": 1,
    "position": 1,
    "isAd": false,
    "productId": "3256811621288203",
    "globalProductId": "1005011807602955",
    "title": "2026 New Air 3【 Pro 3 】 Bluetooth Wireless Earbuds with Heart Rate Monitoring, Active Noise Cancellation Headphones, Waterproof for Daily Use, For IPhone IOS Smartphone, Gaming /Sports /Fitness Earphones.",
    "price": 19.01,
    "originalPrice": 57.2,
    "discountPercent": 66,
    "currency": "USD",
    "sold": "4,000+ sold",
    "soldCount": 4000,
    "rating": 4.9,
    "shipFrom": "US",
    "tags": [
      "New shoppers save $38.19",
      "Free shipping"
    ],
    "productUrl": "https://www.aliexpress.com/item/1005011807602955.html",
    "organicRank": 1,
    "totalResults": 16007,
    "country": "US",
    "checkedAt": "2026-10-05T08:23:47.947Z",
    "checkedAtKst": "2026-10-05 17:23:47 KST"
  },
  {
    "type": "result",
    "keyword": "wireless earbuds",
    "page": 1,
    "position": 2,
    "isAd": false,
    "productId": "3256811844384040",
    "globalProductId": "1005012030698792",
    "title": "TWS Wireless Bluetooth Headset LED Display Gamer Earbuds with Mic Wireless Headphones Noise Cancelling Bluetooth Earphones X15",
    "price": 3.42,
    "originalPrice": 24.79,
    "discountPercent": 86,
    "currency": "USD",
    "sold": "1,000+ sold",
    "soldCount": 1000,
    "rating": 4.9,
    "shipFrom": "US",
    "tags": [
      "New shoppers save $21.37",
      "Free shipping"
    ],
    "productUrl": "https://www.aliexpress.com/item/1005012030698792.html",
    "organicRank": 2,
    "totalResults": 16007,
    "country": "US",
    "checkedAt": "2026-10-05T08:23:47.947Z",
    "checkedAtKst": "2026-10-05 17:23:47 KST"
  }
]
```

## Price

$2 / 1,000 results · $3 / 1,000 rank checks. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/aliexpress-search-scraper?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

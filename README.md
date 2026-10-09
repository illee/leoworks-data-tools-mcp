# LeoWorks Korea & AliExpress Data Tools (via Apify MCP)

Ten [Apify](https://apify.com/leoworks) actors for Korean and cross-border e-commerce data, exposed as tools through the **official Apify MCP server** (hosted by Apify). This repository holds no server code — it only describes a preconfigured server URL so MCP directories can list it.

Ask your agent things like *"Where does 브리츠 공식몰 rank for 무선이어폰 on Naver Shopping?"* or *"What do buyers complain about in this AliExpress listing?"* and it runs the right actor and reads the results. Each call runs on your Apify account and is billed per result at the actor's price; Apify's free $5 monthly credit covers small tests.

## Server URL (streamable HTTP)

```
https://mcp.apify.com/?tools=leoworks/naver-shopping-rank-tracker,leoworks/naver-blog-brand-monitor,leoworks/naver-ai-briefing-monitor,leoworks/korean-review-classifier,leoworks/kbeauty-ranking-review-monitor,leoworks/aliexpress-reviews-classifier,leoworks/aliexpress-search-scraper,leoworks/social-comment-classifier,leoworks/japanese-review-classifier,leoworks/spanish-review-classifier
```

Auth: `Authorization: Bearer <APIFY_TOKEN>` (Apify Console → Settings → API & Integrations), or leave the header out to sign in with OAuth. Keep only the tools you need in `?tools=`.

**Claude Code**
```
claude mcp add --transport http apify "<server URL>" --header "Authorization: Bearer YOUR_APIFY_TOKEN"
```

**Claude Desktop / Cursor** (`mcp.json`)
```json
{ "mcpServers": { "apify": { "url": "<server URL>", "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" } } } }
```

## Tools

| Tool | What it does | Price |
|---|---|---|
| `leoworks--naver-shopping-rank-tracker` | Where a product, URL or store ranks in Naver Shopping for Korean keywords, daily, no login | $3 / 1,000 keyword checks (+$0.50 / 1,000 competitor rows) |
| `leoworks--naver-blog-brand-monitor` | Naver Blog posts about a brand, each labelled sponsored vs self-paid with evidence, sentiment, brand mentions | $4 / 1,000 posts + $1 / 1,000 judgments |
| `leoworks--naver-ai-briefing-monitor` | What Naver's AI briefing answers for a keyword, which sources it cites, and whether your brand and rivals are mentioned or recommended | $3 / 1,000 queries + $12 / 1,000 briefings captured |
| `leoworks--korean-review-classifier` | Complaint type, sentiment and purchase motive for any Korean review dataset (Coupang, Olive Young, Naver) — no scraping, no prompts | $0.50 / 1,000 reviews |
| `leoworks--kbeauty-ranking-review-monitor` | K-beauty bestseller rankings (Olive Young Global, Amore Mall) with rank changes, plus reviews with complaint labels | $2 / 1,000 ranking rows · $1 / 1,000 reviews · $0.50 / 1,000 classifications |
| `leoworks--aliexpress-reviews-classifier` | AliExpress product reviews with English translation, stars, country, SKU, photos, and optional complaint/sentiment labels | $1.50 / 1,000 reviews + $0.50 / 1,000 classifications |
| `leoworks--aliexpress-search-scraper` | AliExpress search results per keyword (rank, price, sold count, rating, ads flagged) and your products' keyword rank over time | $2 / 1,000 results · $3 / 1,000 rank checks |
| `leoworks--social-comment-classifier` | Instagram, TikTok, Facebook and YouTube comments from any comment scraper's dataset, labelled purchase intent, question, complaint, request, praise or spam, plus sentiment | $0.50 / 1,000 comments |
| `leoworks--japanese-review-classifier` | Complaint type, sentiment and purchase motive for Japanese reviews (Rakuten, Amazon.co.jp or any review dataset) | $0.50 / 1,000 reviews |
| `leoworks--spanish-review-classifier` | Complaint type, sentiment and purchase motive for Spanish reviews (MercadoLibre, AliExpress or any review dataset) — beta | $0.50 / 1,000 reviews |

Full details, output fields and limits: each actor's page at [apify.com/leoworks](https://apify.com/leoworks) · overview: [leoworks.kr/tools](https://leoworks.kr/tools/).

Independent tools — not affiliated with NAVER, AliExpress/Alibaba, Olive Young, Amorepacific, Rakuten, MercadoLibre, Meta, TikTok or YouTube. Names are used only to describe data sources.

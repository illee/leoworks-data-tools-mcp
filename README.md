# LeoWorks Review & Lead Data Tools (via Apify MCP)

Fifteen [Apify](https://apify.com/leoworks?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) actors for **Google Maps review analysis and lead scoring**, **review sentiment and complaint classification** (Korean, Japanese, Spanish, Amazon, social comments), **Naver Shopping and Naver Blog** data, **K-beauty rankings**, **AliExpress** reviews and search, and **B2B lead data** — exposed as tools through the **official Apify MCP server** (hosted by Apify). This repository holds no server code: it describes a preconfigured server URL, a Claude Code plugin, and one page per tool with example prompts and sample output.

Each call runs on your Apify account and is billed per result at the actor's price; Apify's free monthly credit covers small tests.

## Install in Claude Code (plugin)

```
/plugin install leoworks-data-tools --marketplace illee/leoworks-data-tools-mcp
```

On older Claude Code versions, use two steps:

```
/plugin marketplace add illee/leoworks-data-tools-mcp
/plugin install leoworks-data-tools@leoworks
```

Then run `/mcp`, pick `leoworks-data-tools` and sign in with your Apify account (OAuth).

## Connect

Server URL (streamable HTTP):

```
https://mcp.apify.com/?tools=leoworks/naver-shopping-rank-tracker,leoworks/naver-blog-brand-monitor,leoworks/naver-ai-briefing-monitor,leoworks/korean-review-classifier,leoworks/kbeauty-ranking-review-monitor,leoworks/aliexpress-reviews-classifier,leoworks/aliexpress-search-scraper,leoworks/social-comment-classifier,leoworks/japanese-review-classifier,leoworks/spanish-review-classifier,leoworks/google-maps-review-classifier,leoworks/google-maps-lead-qualifier,leoworks/amazon-review-classifier,leoworks/job-posting-classifier,leoworks/company-website-classifier
```

Auth: `Authorization: Bearer <APIFY_TOKEN>` (Apify Console → Settings → API & Integrations), or leave the header out to sign in with OAuth. Keep only the tools you need in `?tools=`.

**Claude Code, without the plugin**
```
claude mcp add --transport http leoworks "<server URL>" --header "Authorization: Bearer YOUR_APIFY_TOKEN"
```

**Claude Desktop / Cursor** (`mcp.json`)
```json
{ "mcpServers": { "leoworks": { "url": "<server URL>", "headers": { "Authorization": "Bearer YOUR_APIFY_TOKEN" } } } }
```

## Example prompts

**Google Maps**
- Analyze the Google Maps reviews of Joe's Pizza Broadway in New York (place ID ChIJifIePKtZwokRVZ-UdRGkZzs): classify the newest 20 reviews, tell me the top complaint types and which reviews have no owner reply yet.
- Find 20 cosmetic dentists in Chicago on Google Maps and score them against this ideal customer: "Dental practices that offer cosmetic dentistry such as veneers or teeth whitening". Show the top 5 with the reason for each score.

**Review & comment classifiers**
- Classify these Korean reviews and tell me the top complaint types: "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요." / "냄새가 너무 독해서 두통이 와요." / "가격 대비 만족, 재구매 의사 있습니다."
- Why are buyers returning this product? Classify these Amazon reviews: "Stopped charging after two weeks. Returning it." / "Fits great but the fabric is see-through when I squat." / "Arrived late and the box was crushed, but the product itself is fine."

**Korea: Naver & K-beauty**
- Check where 브리츠 공식몰 ranks for 무선이어폰 on Naver Shopping and tell me the price and rating.
- Find the latest 30 Naver Blog posts about 라운드랩 선크림 and tell me how many are sponsored (체험단) and what the self-paid ones say.

**AliExpress**
- Get the latest 50 reviews of https://www.aliexpress.com/item/1005008549911526.html and tell me the main complaints.
- Search AliExpress for "magsafe phone case", 40 results, and list the 5 best-selling ones with price and rating.

**B2B lead data**
- Does this company fit "B2B software companies selling to retailers"? https://acme-analytics.example.com/ — "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada."
- Which of these jobs are remote and sponsor visas? Job 1: "Staff Engineer — fully remote (US time zones). We sponsor H-1B for the right candidate. $160k–$190k per year." Job 2: "Office Manager — on-site in Denver. We are unable to sponsor work visas."

More prompts, an input example and sample output for every tool are in [`tools/`](tools/).

## Tools

### Google Maps

| Tool | What it does | Price |
|---|---|---|
| [`leoworks--google-maps-review-classifier`](tools/google-maps-review-classifier.md) | Classify Google Maps reviews from any Google Maps reviews scraper's dataset: complaint types, what customers praise, serious issues (safety, discrimination, fraud), sentiment and unanswered reviews — plus a reply queue and per-place CSV. No LLM key. | $0.50 / 1,000 reviews (+ compass' Google Maps scraper, billed separately, when the tool collects the reviews — see the cost note) |
| [`leoworks--google-maps-lead-qualifier`](tools/google-maps-lead-qualifier.md) | Score Google Maps places from any Google Maps scraper against your ideal customer in plain language: lead score, tier A–D, a reason per lead, chain check, emails and socials kept, LEADS.csv. Free filters. No LLM key. | $2 / 1,000 places (+ compass' Google Maps scraper, billed separately, when the tool collects the places — see the cost note) |

### Review & comment classifiers

| Tool | What it does | Price |
|---|---|---|
| [`leoworks--korean-review-classifier`](tools/korean-review-classifier.md) | Classify Korean customer reviews — Coupang reviews (쿠팡 리뷰), Olive Young reviews, Naver Shopping and Naver Place reviews — into complaint types, sentiment and purchase motive with probabilities. Korean review sentiment analysis for any review scraper's dataset — no scraping, no prompt writing. | $0.50 / 1,000 reviews |
| [`leoworks--amazon-review-classifier`](tools/amazon-review-classifier.md) | Classify Amazon reviews from any Amazon reviews scraper: complaint and return reasons, what buyers praise, sentiment, star-vs-text mismatch and worst variants — plus an action queue and per-product CSV. No LLM key. | $0.50 / 1,000 reviews |
| [`leoworks--japanese-review-classifier`](tools/japanese-review-classifier.md) | Classify Japanese customer reviews — Rakuten (楽天レビュー), Amazon.co.jp and any review scraper's dataset — into complaint types, sentiment and purchase motive with probabilities. Japanese review sentiment analysis (レビュー分析), no prompts, no LLM key. | $0.50 / 1,000 reviews |
| [`leoworks--spanish-review-classifier`](tools/spanish-review-classifier.md) | Classify Spanish customer reviews — MercadoLibre (reseñas y opiniones), AliExpress and any review scraper's dataset — into complaint types, sentiment and purchase motive with probabilities. Spanish review sentiment analysis (análisis de reseñas), no prompts, no LLM key. Beta. | $0.50 / 1,000 reviews (beta) |
| [`leoworks--social-comment-classifier`](tools/social-comment-classifier.md) | Classify Instagram, TikTok, Facebook and YouTube comments from any comment scraper's dataset: purchase intent, questions, complaints, requests, praise, spam and sentiment, with probabilities. Comment sentiment analysis, no prompts, no LLM key. | $0.50 / 1,000 comments |

### Korea: Naver & K-beauty

| Tool | What it does | Price |
|---|---|---|
| [`leoworks--naver-shopping-rank-tracker`](tools/naver-shopping-rank-tracker.md) | Track where your products, URLs or Smartstore stores rank in Naver Shopping search for any Korean keyword (네이버 쇼핑 순위, 스마트스토어 순위). Organic rank 1–35 plus ad slot position, price, reviews and rating — a Naver Shopping scraper built for scheduled rank monitoring. | $3 / 1,000 keyword checks (+$0.50 / 1,000 competitor rows) |
| [`leoworks--naver-blog-brand-monitor`](tools/naver-blog-brand-monitor.md) | Monitor a brand or product on Naver Blog (네이버 블로그), Korea's biggest review platform. This Naver Blog scraper collects posts by keyword and labels each one sponsored (체험단/협찬) or self-paid with evidence, plus sentiment and brand mentions — Korean social listening in one run. | $4 / 1,000 posts + $1 / 1,000 judgments |
| [`leoworks--naver-ai-briefing-monitor`](tools/naver-ai-briefing-monitor.md) | Track your brand in Naver's AI briefing (네이버 AI 브리핑), the generative answer atop Korea's #1 search engine — Google AI Overviews for Korea. Capture the answer, cited sources, AI ads and related questions, and see if your brand or rivals are mentioned and recommended (GEO). | $3 / 1,000 queries + $12 / 1,000 briefings captured |
| [`leoworks--kbeauty-ranking-review-monitor`](tools/kbeauty-ranking-review-monitor.md) | Track K-beauty bestseller rankings on Olive Young Global (OliveYoung, 올리브영) and Amorepacific's Amore Mall (아모레몰: Sulwhasoo, Laneige, Hera…) and collect Korean cosmetics reviews with optional AI classification — complaint types, sentiment and purchase motive in Korean, English and Japanese. | $2 / 1,000 ranking rows · $1 / 1,000 reviews · $0.50 / 1,000 classifications |

### AliExpress

| Tool | What it does | Price |
|---|---|---|
| [`leoworks--aliexpress-reviews-classifier`](tools/aliexpress-reviews-classifier.md) | Scrape AliExpress product reviews — text, English translation, star rating, date, buyer country, option (SKU) and photos — from any product URL. Optional AI classification adds complaint types, sentiment and purchase motive, plus a per-product summary. No login. | $1.50 / 1,000 reviews + $0.50 / 1,000 classifications |
| [`leoworks--aliexpress-search-scraper`](tools/aliexpress-search-scraper.md) | Scrape AliExpress search results for any keyword — rank, title, price, discount, sold count, rating, ship-from and ads flagged — up to 60 pages. Rank mode tracks where your products rank for each keyword over time. No login. | $2 / 1,000 results · $3 / 1,000 rank checks |

### B2B lead data

| Tool | What it does | Price |
|---|---|---|
| [`leoworks--company-website-classifier`](tools/company-website-classifier.md) | Classify companies from their crawled websites: industry, business type, B2B/B2C, reach and fit to your ICP — tier and reason per company, emails and socials found on the site, COMPANIES.csv. No LLM key. | $2 / 1,000 sites |
| [`leoworks--job-posting-classifier`](tools/job-posting-classifier.md) | Classify job postings from LinkedIn, Indeed or any jobs scraper's dataset: remote / hybrid / on-site, years of experience required, employment type, visa sponsorship and whether salary is disclosed. Job data enrichment, no LLM key. | $0.50 / 1,000 postings |

The two Google Maps tools can collect data for you by running compass' Google Maps scraper on your Apify account; that run is billed to you separately (see each tool page). If you already have a Google Maps dataset, pass its ID and only the classifier is billed.

Overview: [leoworks.kr/tools](https://leoworks.kr/tools/) · all actors: [apify.com/leoworks](https://apify.com/leoworks?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo)

Independent tools — not affiliated with Google, NAVER, AliExpress/Alibaba, Amazon, Olive Young, Amorepacific, Rakuten, MercadoLibre, LinkedIn, Indeed, Meta, TikTok or YouTube. Names are used only to describe data sources.

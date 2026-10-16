# Naver Blog Brand Monitor — sponsored vs organic posts

`leoworks--naver-blog-brand-monitor` · Apify actor [leoworks/naver-blog-brand-monitor](https://apify.com/leoworks/naver-blog-brand-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

**Code examples** (Python · JavaScript · curl · MCP config): [`examples/naver-blog-brand-monitor/`](../examples/naver-blog-brand-monitor/README.md)

Monitor a brand or product on Naver Blog (네이버 블로그), Korea's biggest review platform. This Naver Blog scraper collects posts by keyword and labels each one sponsored (체험단/협찬) or self-paid with evidence, plus sentiment and brand mentions — Korean social listening in one run.

**People ask for this as:** *Naver Blog scraper* · *sponsored post detection* · *Korean social listening*

## Ask your AI agent

1. Find the latest 30 Naver Blog posts about 라운드랩 선크림 and tell me how many are sponsored (체험단) and what the self-paid ones say.
2. Scrape 50 recent Naver Blog posts about 다이슨 에어랩 후기 and show which ones look sponsored, quoting the evidence sentence.
3. Compare 라운드랩 and 토리든 on Naver Blog with 30 posts each — which brand has the larger share of sponsored posts?

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/naver-blog-brand-monitor
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "queries": [
    "라운드랩 선크림"
  ],
  "brandNames": [
    "라운드랩"
  ],
  "maxPostsPerQuery": 8,
  "judge": {
    "sponsored": true,
    "sentiment": true,
    "brandMention": true
  }
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-06`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "query": "다이슨 에어랩 후기",
    "url": "https://blog.naver.com/[blogger-id]/[post-id]",
    "title": "바르는 코엔자임q10 추천, 하이퍼셀·이데베논 앰플 ｜ 사용법·부작용",
    "publishedAt": "2026-10-05T22:12:13.444Z",
    "snippet": "이 포스팅은 네이버 쇼핑 파트너 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.\n바르는 코엔자임q10을 찾아보면 세럼, 앰플, 원액이 섞여 나와서 무엇을 사야 할지 헷갈립니다. 같은 코큐텐이라도 바로 바르는 것, 섞어서 바르는 것, 물에 타서 만들어 쓰는 것으로 쓰는 법이 갈립니다. 많이 찾는 5가지를 골라 어떻게 쓰는지부터 나눠 봤습니다.\nⓒ",
    "commentCount": 0,
    "likeCount": 1,
    "reactions": {
      "like": 1
    },
    "imageCount": 6,
    "sponsored": {
      "label": "sponsored",
      "probability": 0.95,
      "method": "model",
      "evidence": [],
      "scores": {
        "sponsored": 0.95,
        "self_paid": 0,
        "unclear": 0.05
      },
      "affiliate": true,
      "affiliateEvidence": [
        {
          "type": "affiliate_disclosure",
          "text": "이 포스팅은 네이버 쇼핑 파트너 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다"
        }
      ]
    },
    "sentiment": {
      "label": "positive",
      "probability": 0.68,
      "confidence": 0.52
    },
    "brandMentions": [
      {
        "brand": "다이슨",
        "mentioned": false,
        "probability": 0.03,
        "method": "model"
      },
      {
        "brand": "Dyson",
        "mentioned": false,
        "probability": 0.02,
        "method": "model"
      }
    ]
  },
  {
    "query": "다이슨 에어랩 후기",
    "url": "https://blog.naver.com/[blogger-id]/[post-id]",
    "title": "다이슨 에어랩 코안다 2x, 드라이만 할 거라면 아까운 이유",
    "publishedAt": "2026-10-05T19:47:19.519Z",
    "snippet": "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.\n2026년형 에어랩 코안다 2x 전체 모습과 구성. 출처: 다이슨 공식\n다이슨 에어랩 코안다 2x는 머리를 말린 뒤 컬이나 볼륨, 스트레이트까지 자주 만드는 사람에게 고를 이유가 있어요. 드라이어와 스타일링 도구를 번갈아 꺼내던 준비 과정을 한 본체와 교체형 툴로 이어갈",
    "commentCount": 0,
    "likeCount": 0,
    "imageCount": 4,
    "sponsored": {
      "label": "unclear",
      "probability": 0.36,
      "method": "model",
      "evidence": [],
      "scores": {
        "sponsored": 0.62,
        "self_paid": 0.02,
        "unclear": 0.36
      },
      "affiliate": true,
      "affiliateEvidence": [
        {
          "type": "affiliate_disclosure",
          "text": "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다"
        },
        {
          "type": "affiliate_link",
          "source": "link.coupang.com"
        }
      ]
    },
    "sentiment": {
      "label": "neutral",
      "probability": 0.89,
      "confidence": 0.83
    },
    "brandMentions": [
      {
        "brand": "다이슨",
        "mentioned": true,
        "probability": 1,
        "method": "exact"
      },
      {
        "brand": "Dyson",
        "mentioned": true,
        "probability": 0.99,
        "method": "model"
      }
    ]
  }
]
```

## Price

$4 / 1,000 posts + $1 / 1,000 judgments. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/naver-blog-brand-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

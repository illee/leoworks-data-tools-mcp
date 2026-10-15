# Naver AI Briefing Monitor — brands in Korean AI answers

`leoworks--naver-ai-briefing-monitor` · Apify actor [leoworks/naver-ai-briefing-monitor](https://apify.com/leoworks/naver-ai-briefing-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

Track your brand in Naver's AI briefing (네이버 AI 브리핑), the generative answer atop Korea's #1 search engine — Google AI Overviews for Korea. Capture the answer, cited sources, AI ads and related questions, and see if your brand or rivals are mentioned and recommended (GEO).

**People ask for this as:** *Naver AI briefing* · *AI search visibility* · *GEO*

## Ask your AI agent

1. Check whether 다이슨 is mentioned in Naver's AI briefing for 무선청소기 추천 2026 and list the cited sources.
2. Check Naver's AI briefing for 콜라겐 효과 and 전기포트 세척 방법 and tell me which blogs and sites it cites.
3. For the query 에어프라이어 추천, does Naver's AI briefing mention 쿠쿠 or 필립스, and is either of them recommended?

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/naver-ai-briefing-monitor
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "queries": [
    "콜라겐 효과",
    "전기포트 세척 방법"
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-06`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "query": "콜라겐 효과",
    "surface": "pc",
    "hasBriefing": true,
    "checkedAt": "2026-10-06T02:16:20.241Z",
    "checkedAtKst": "2026-10-06 11:16:20 KST",
    "template": "prs_template_aib_answer_desk",
    "answerText": "콜라겐은 피부, 뼈, 근육, 힘줄, 인대 등 인체의 다양한 조직을 구성하는 중요한 단백질입니다. 체내에서 조직을 형성하고 지지하는 역할을 수행하며, 나이가 들수록 그 양이 점차 감소하여 노화의 원인이 되기도 합니다.\n\n신체 부위별 기대 효과\n연구 결과에 따르면 콜라겐 섭취는 피부 외에도 다양한 신체 기능에 긍정적인 영향을 줄 수 있습니다.\n- 근육 및 골격 건강\n - 근력 운동과 병행 시 제지방량 및 근력 증가에 도움\n - 뼈의 미네랄 밀도를 높여 골소실로부터 보호\n- 심혈관 및 관절 건강\n - …",
    "quickAnswer": null,
    "citations": [
      {
        "index": 1,
        "title": "\"먹는 콜라겐 효과, 광고처럼 좋을까\"...의사들이 답했다",
        "url": "https://www.gysarang.com/Module/News/News.asp?Mode=V&Srno=27067",
        "source": "광양사랑병원",
        "platform": "광양사랑병원",
        "publishedAt": null
      },
      {
        "index": 2,
        "title": "콜라겐 많이 먹으면 피부 좋아질까? [서울대병원 X 사물궁이]",
        "url": "https://www.snuh.org/health/tv/view.do?seq_no=799",
        "source": "서울대학교병원",
        "platform": "서울대학교병원",
        "publishedAt": null
      },
      {
        "index": 3,
        "title": "매일 콜라겐을 섭취하면 몸에 어떤 일이 일어날",
        "url": "https://www.gysarang.com/Module/News/Lecture.asp?Mode=V&Srno=10006",
        "source": "광양사랑병원",
        "platform": "광양사랑병원",
        "publishedAt": null
      }
    ],
    "relatedQuestions": [],
    "media": [
      {
        "type": "image",
        "title": "\"먹는 콜라겐 효과, 광고처럼 좋을까\"...의사들이 답했다",
        "source": "광양사랑병원",
        "url": "https://www.gysarang.com/Module/News/News.asp?Mode=V&Srno=27067",
        "publishedAt": null
      },
      {
        "type": "image",
        "title": "매일 콜라겐을 섭취하면 몸에 어떤 일이 일어날",
        "source": "광양사랑병원",
        "url": "https://www.gysarang.com/Module/News/Lecture.asp?Mode=V&Srno=10006",
        "publishedAt": null
      },
      {
        "type": "image",
        "title": "\"먹는 알부민·콜라겐 효능 임상적 근거 부족\"",
        "source": "의협신문",
        "url": "http://www.doctorsnews.co.kr/news/articleView.html?idxno=164724",
        "publishedAt": "2026-05-27T08:29:45.000Z"
      }
    ],
    "adsInBriefing": [],
    "brandMentions": [
      {
        "brand": "다이슨",
        "role": "brand",
        "mentioned": false,
        "probability": 0.01,
        "method": "model",
        "recommended": false,
        "recommendedProbability": 0,
        "sentiment": null,
        "sentimentProbability": null,
        "citedSources": 0
      },
      {
        "brand": "삼성",
        "role": "competitor",
        "mentioned": false,
        "probability": 0.03,
        "method": "model",
        "recommended": false,
        "recommendedProbability": 0,
        "sentiment": null,
        "sentimentProbability": null,
        "citedSources": 0
      },
      {
        "brand": "LG",
        "role": "competitor",
        "mentioned": false,
        "probability": 0.02,
        "method": "model",
        "recommended": false,
        "recommendedProbability": 0,
        "sentiment": null,
        "sentimentProbability": null,
        "citedSources": 0
      }
    ]
  },
  {
    "query": "무선청소기 추천 2026",
    "surface": "pc",
    "hasBriefing": true,
    "checkedAt": "2026-10-06T02:16:20.240Z",
    "checkedAtKst": "2026-10-06 11:16:20 KST",
    "template": "prs_template_aib_answer_desk",
    "answerText": "2026년 무선청소기 시장은 자동 먼지비움 기능과 손목 부담을 줄이는 초경량 설계가 핵심 트렌드로 꼽힙니다. 사용자의 주거 환경과 예산에 따라 프리미엄 대기업 모델과 가성비 중소기업 모델로 선택지가 나뉩니다.\n\n브랜드별 핵심 특징 비교\n| 구분 | 삼성 제트 시리즈 | LG 코드제로 A9S 시리즈 | 다이슨 프리미엄 시리즈 |\n| :--- | :--- | :--- | :--- |\n| 핵심 강점 | 위생적 먼지통 세척 &amp; 가성비 스팀 물걸레 | 물걸레 연동 &amp; 깔끔한 타워 | 모터 기…",
    "quickAnswer": null,
    "citations": [
      {
        "index": 1,
        "title": "2026년 네이버 랭킹 기준! 가성비 무선청소기 추천 TOP 4 (실사용 장단점 비교)",
        "url": "https://blog.naver.com/[blogger-id]/[post-id]",
        "source": "nori",
        "platform": "네이버 블로그",
        "publishedAt": "2026-09-27T22:36:00+09:00"
      },
      {
        "index": 2,
        "title": "무선청소기 구매 전 체크포인트 5가지와 2026 추천 7가지 제품 비교",
        "url": "https://blog.naver.com/[blogger-id]/[post-id]",
        "source": "HeadFi Labs",
        "platform": "네이버 블로그",
        "publishedAt": "2026-09-26T09:00:00+09:00"
      },
      {
        "index": 3,
        "title": "2026 상반기 무선청소기 TOP 5 : 다나와 DPG는 내맘을 디피지",
        "url": "https://dpg.danawa.com/news/view?boardSeq=63&listSeq=6039621",
        "source": "danawa.com",
        "platform": "danawa.com",
        "publishedAt": "2026-07-27T14:13:48+09:00"
      }
    ],
    "relatedQuestions": [],
    "media": [
      {
        "type": "image",
        "title": "무선청소기 구매 전 체크포인트 5가지와 2026 추천 7가지 제품 비교",
        "source": "네이버 블로그",
        "url": "https://blog.naver.com/[blogger-id]/[post-id]",
        "publishedAt": "2026-09-26T00:00:00.000Z"
      },
      {
        "type": "image",
        "title": "[2026 추천] 삶의 질을 바꾸는 무선청소기 베스트 5: 성능 및 가격 완벽 비교",
        "source": "네이버 블로그",
        "url": "https://blog.naver.com/[blogger-id]/[post-id]",
        "publishedAt": "2026-04-20T10:38:00.000Z"
      },
      {
        "type": "image",
        "title": "[2026 무선청소기 비교] 삼성·LG·다이슨 솔직 비교! 흡입력부터 먼지비움 스테이션 스펙 완전 분석",
        "source": "네이버 블로그",
        "url": "https://blog.naver.com/[blogger-id]/[post-id]",
        "publishedAt": "2026-08-09T14:15:00.000Z"
      }
    ],
    "adsInBriefing": [],
    "brandMentions": [
      {
        "brand": "다이슨",
        "role": "brand",
        "mentioned": true,
        "probability": 1,
        "method": "exact",
        "recommended": true,
        "recommendedProbability": 0.9,
        "sentiment": "positive",
        "sentimentProbability": 0.88,
        "citedSources": 1
      },
      {
        "brand": "삼성",
        "role": "competitor",
        "mentioned": true,
        "probability": 1,
        "method": "exact",
        "recommended": true,
        "recommendedProbability": 0.92,
        "sentiment": "positive",
        "sentimentProbability": 0.97,
        "citedSources": 1
      },
      {
        "brand": "LG",
        "role": "competitor",
        "mentioned": true,
        "probability": 1,
        "method": "exact",
        "recommended": true,
        "recommendedProbability": 0.9,
        "sentiment": "positive",
        "sentimentProbability": 0.93,
        "citedSources": 1
      }
    ]
  }
]
```

## Price

$3 / 1,000 queries + $12 / 1,000 briefings captured. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/naver-ai-briefing-monitor?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

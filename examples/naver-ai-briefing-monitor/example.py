"""leoworks/naver-ai-briefing-monitor — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "queries": [
        "콜라겐 효과",
        "선크림 추천 지성",
        "세라마이드 크림 효능",
        "레티놀 부작용"
    ],
    "brandNames": [
        "라운드랩"
    ],
    "competitorNames": [
        "아누아",
        "토리든"
    ]
}

run = client.actor("leoworks/naver-ai-briefing-monitor").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["query", "hasBriefing", "brandMentions", "citations"]})
    if i == 4:
        break

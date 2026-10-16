"""leoworks/naver-shopping-rank-tracker — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "targets": [
        {
            "keyword": "무선이어폰",
            "match": "브리츠 공식몰"
        },
        {
            "keyword": "블루투스 이어폰",
            "match": "브리츠 공식몰"
        },
        {
            "keyword": "텀블러",
            "match": "스탠리"
        }
    ],
    "includeAds": True,
    "topCompetitors": 10
}

run = client.actor("leoworks/naver-shopping-rank-tracker").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["keyword", "match", "organicRank", "adRank", "price", "rankChange"]})
    if i == 4:
        break

"""leoworks/korean-review-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "texts": [
        "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요.",
        "한 달도 안 돼서 충전이 안 됩니다. 교환 요청했는데 답이 없어요.",
        "향이 너무 강해서 두통이 와요. 가격 대비 별로입니다.",
        "항상 쓰던 거라 이번에도 재구매했어요. 할인할 때 사니 좋네요!"
    ],
    "customLabels": [
        "mentions the smell"
    ]
}

run = client.actor("leoworks/korean-review-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["text", "labels"]})
    if i == 4:
        break

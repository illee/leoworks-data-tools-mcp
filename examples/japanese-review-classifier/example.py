"""leoworks/japanese-review-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
    "texts": [
        "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。",
        "すぐ壊れました。充電できません。返品したいです。",
        "注文から届くまで10日もかかりました。連絡も一切ありません。",
        "品質が良くて3回目のリピートです。セール中に買えて満足しています。"
    ],
    "customLabels": [
        "mentions the smell"
    ]
}

run = client.actor("leoworks/japanese-review-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["text", "labels"]})
    if i == 4:
        break

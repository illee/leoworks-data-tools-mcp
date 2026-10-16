// leoworks/korean-review-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "texts": [
    "배송이 일주일이나 걸렸고 박스가 다 찢어져서 왔어요.",
    "한 달도 안 돼서 충전이 안 됩니다. 교환 요청했는데 답이 없어요.",
    "향이 너무 강해서 두통이 와요. 가격 대비 별로입니다.",
    "항상 쓰던 거라 이번에도 재구매했어요. 할인할 때 사니 좋네요!"
  ],
  "customLabels": [
    "mentions the smell"
  ]
};

const run = await client.actor('leoworks/korean-review-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["text", "labels"].map((k) => [k, item[k]])));
}

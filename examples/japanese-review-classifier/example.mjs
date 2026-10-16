// leoworks/japanese-review-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "texts": [
    "ダンボールが潰れて届きました。中身は無事でしたが、梱包をもう少し丁寧にしてほしいです。",
    "すぐ壊れました。充電できません。返品したいです。",
    "注文から届くまで10日もかかりました。連絡も一切ありません。",
    "品質が良くて3回目のリピートです。セール中に買えて満足しています。"
  ],
  "customLabels": [
    "mentions the smell"
  ]
};

const run = await client.actor('leoworks/japanese-review-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["text", "labels"].map((k) => [k, item[k]])));
}

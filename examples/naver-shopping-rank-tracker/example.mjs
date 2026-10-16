// leoworks/naver-shopping-rank-tracker — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
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
  "includeAds": true,
  "topCompetitors": 10
};

const run = await client.actor('leoworks/naver-shopping-rank-tracker').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["keyword", "match", "organicRank", "adRank", "price", "rankChange"].map((k) => [k, item[k]])));
}

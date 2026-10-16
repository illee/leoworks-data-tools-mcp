// leoworks/naver-ai-briefing-monitor — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
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
};

const run = await client.actor('leoworks/naver-ai-briefing-monitor').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["query", "hasBriefing", "brandMentions", "citations"].map((k) => [k, item[k]])));
}

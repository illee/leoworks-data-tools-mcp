// leoworks/naver-blog-brand-monitor — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "queries": [
    "라운드랩 선크림"
  ],
  "brandNames": [
    "라운드랩",
    "Round Lab"
  ],
  "maxPostsPerQuery": 20,
  "sort": "recent"
};

const run = await client.actor('leoworks/naver-blog-brand-monitor').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["title", "sponsored", "sentiment", "brandMentions"].map((k) => [k, item[k]])));
}

// leoworks/kbeauty-ranking-review-monitor — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "sources": [
    "oliveyoung_global"
  ],
  "oliveyoungCategories": [
    "skincare"
  ],
  "maxProductsPerRanking": 10,
  "reviewsPerProduct": 20,
  "classifyReviews": true
};

const run = await client.actor('leoworks/kbeauty-ranking-review-monitor').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["type", "rank", "productName", "brand", "price", "rating"].map((k) => [k, item[k]])));
}

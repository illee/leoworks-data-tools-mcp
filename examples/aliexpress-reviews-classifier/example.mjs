// leoworks/aliexpress-reviews-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "productUrls": [
    "https://www.aliexpress.com/item/1005008549911526.html"
  ],
  "reviewsPerProduct": 20,
  "reviewFilter": "all",
  "classifyReviews": true
};

const run = await client.actor('leoworks/aliexpress-reviews-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["rating", "country", "textEnglish", "labels"].map((k) => [k, item[k]])));
}

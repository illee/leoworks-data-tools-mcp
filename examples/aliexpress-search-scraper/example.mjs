// leoworks/aliexpress-search-scraper — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "keywords": [
    "wireless earbuds",
    "phone case magsafe",
    "led strip lights"
  ],
  "maxResultsPerKeyword": 60,
  "sort": "orders",
  "country": "US",
  "currency": "USD"
};

const run = await client.actor('leoworks/aliexpress-search-scraper').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["position", "title", "price", "soldCount", "isAd"].map((k) => [k, item[k]])));
}

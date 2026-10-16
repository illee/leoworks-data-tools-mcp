// leoworks/amazon-review-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "texts": [
    "Stopped charging after two weeks. Returning it.",
    "Fits great but the fabric is see-through when I squat.",
    "Arrived with a cracked screen and no box. Seller never replied.",
    "Exactly as described, sturdy and easy to set up. Bought a second one."
  ],
  "customLabels": [
    "mentions the smell"
  ]
};

const run = await client.actor('leoworks/amazon-review-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["rating", "complaintTypes", "sentiment", "returnIntent", "action"].map((k) => [k, item[k]])));
}

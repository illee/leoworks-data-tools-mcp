// leoworks/google-maps-review-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "places": [
    "ChIJifIePKtZwokRVZ-UdRGkZzs",
    "ChIJCar0f49ZwokR6ozLV-dHNTE"
  ],
  "maxReviewsPerPlace": 20
};

const run = await client.actor('leoworks/google-maps-review-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["rating", "sentiment", "complaintTypes", "needsReply", "alert"].map((k) => [k, item[k]])));
}

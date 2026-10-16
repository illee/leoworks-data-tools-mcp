// leoworks/google-maps-lead-qualifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "icp": "Independent dental practices that offer cosmetic dentistry such as teeth whitening or veneers.",
  "searchQueries": [
    "cosmetic dentist"
  ],
  "location": "Chicago, USA",
  "maxPlacesPerSearch": 10,
  "excludeChains": true
};

const run = await client.actor('leoworks/google-maps-lead-qualifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["title", "leadScore", "tier", "reason"].map((k) => [k, item[k]])));
}

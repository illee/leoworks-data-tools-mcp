// leoworks/company-website-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "icp": "Independent dental practices (not chains)",
  "pages": [
    {
      "url": "https://acme-analytics.example.com/",
      "title": "Acme Analytics - demand forecasting for retailers",
      "text": "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada. Start a 14-day free trial - plans from $49 per month."
    },
    {
      "url": "https://brightsmile-dental.example.org/",
      "title": "Bright Smile Dental - family dentist in Austin, TX",
      "text": "Bright Smile Dental is a family-owned dental practice in South Austin. Dr. Lee and our team offer cleanings, fillings, Invisalign and same-day crowns. New patients welcome - call or book online."
    }
  ]
};

const run = await client.actor('leoworks/company-website-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["domain", "industry", "customerType", "fitScore", "tier", "reason"].map((k) => [k, item[k]])));
}

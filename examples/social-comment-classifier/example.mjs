// leoworks/social-comment-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "texts": [
    "Where can I buy this in Canada? Need it!!",
    "Ordered 3 weeks ago and still nothing. Is anyone answering messages?",
    "Can you make this in black? I would buy two.",
    "DM me to earn $500 a day from home 💰💰",
    "Love this, the colors are perfect 😍"
  ],
  "customLabels": [
    "asks about shipping"
  ]
};

const run = await client.actor('leoworks/social-comment-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["text", "type", "sentiment", "needsReply"].map((k) => [k, item[k]])));
}

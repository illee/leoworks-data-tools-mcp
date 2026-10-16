// leoworks/job-posting-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "skills": [
    "Python",
    "SQL"
  ],
  "jobs": [
    {
      "title": "Senior Data Analyst",
      "company": "Example Co",
      "location": "Chicago, IL",
      "description": "Hybrid role: 3 days a week in our Chicago office. 5+ years of SQL and BI experience required. Full-time. Salary $110,000-$130,000 per year. We are unable to sponsor work visas."
    },
    {
      "title": "Warehouse Associate",
      "company": "Example Logistics",
      "location": "Dallas, TX",
      "description": "Entry level - no experience needed, we train you. Part-time evening shifts, in person at our Dallas warehouse. $18/hour."
    }
  ]
};

const run = await client.actor('leoworks/job-posting-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["title", "workMode", "experience", "visa", "salaryAnnualMinUsd"].map((k) => [k, item[k]])));
}

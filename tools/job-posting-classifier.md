# Job Posting Classifier — remote, experience, visa

`leoworks--job-posting-classifier` · Apify actor [leoworks/job-posting-classifier](https://apify.com/leoworks/job-posting-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

Classify job postings from LinkedIn, Indeed or any jobs scraper's dataset: remote / hybrid / on-site, years of experience required, employment type, visa sponsorship and whether salary is disclosed. Job data enrichment, no LLM key.

**People ask for this as:** *filter LinkedIn jobs* · *visa sponsorship jobs* · *job posting classifier*

## Ask your AI agent

1. Which of these jobs are remote and sponsor visas? Job 1: "Staff Engineer — fully remote (US time zones). We sponsor H-1B for the right candidate. $160k–$190k per year." Job 2: "Office Manager — on-site in Denver. We are unable to sponsor work visas."
2. From dataset YOUR_DATASET_ID (my LinkedIn jobs scraper run), list the entry-level remote jobs that mention Python or SQL, with the annual salary in USD.
3. Tag this posting and give me the pay as an annual USD figure: "Warehouse Associate, part-time evening shifts, in person at our Dallas warehouse. $18/hour, no experience needed."

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/job-posting-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "jobs": [
    {
      "title": "Senior Data Analyst",
      "company": "Example Co",
      "location": "Chicago, IL",
      "description": "Hybrid role: 3 days a week in our Chicago office. 5+ years of SQL and BI experience required. Full-time. Salary $110,000–$130,000 per year. We are unable to sponsor work visas."
    },
    {
      "title": "Warehouse Associate",
      "company": "Example Logistics",
      "location": "Dallas, TX",
      "description": "Entry level — no experience needed, we train you. Part-time evening shifts, in person at our Dallas warehouse. $18/hour."
    }
  ],
  "skills": [
    "Python",
    "SQL",
    "AWS"
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-11`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "id": "4476860446",
    "url": "https://www.linkedin.com/jobs/view/rn-at-rwjbarnabas-health-4476860446?position=11&pageNum=0&refId=5Ac4wgfaLUIzfql%2B5YkesQ%3D%3D&trackingId=Z9jIkixBTKTp0u8%2BZMhNUw%3D%3D",
    "title": "RN",
    "company": "RWJBarnabas Health",
    "location": "Elizabeth, NJ",
    "postedAt": "2026-10-09T00:00:00.000Z",
    "applicants": 25,
    "companyIndustry": "Hospitals and Health Care",
    "workMode": "onsite",
    "experience": "1-2",
    "employmentType": "full_time",
    "visa": "not_mentioned",
    "salaryDisclosed": true,
    "salaryText": "$48.29 - $67.04 per hour",
    "salaryMin": 48.29,
    "salaryMax": 67.04,
    "salaryCurrency": "USD",
    "salaryPeriod": "hour",
    "salaryAnnualMinUsd": 100443,
    "salaryAnnualMaxUsd": 139443,
    "skills": "BLS",
    "labels": {
      "workMode": {
        "label": "onsite",
        "probability": 0.53,
        "confidence": 0.37
      },
      "experience": {
        "label": "1-2",
        "probability": 1,
        "confidence": 1
      },
      "employmentType": {
        "label": "full_time",
        "probability": 0.88,
        "confidence": 0.86
      },
      "visa": {
        "label": "not_mentioned",
        "probability": 1,
        "confidence": 1
      }
    },
    "model": "jev-1.13.0"
  },
  {
    "id": "4459552161",
    "url": "https://www.linkedin.com/jobs/view/registered-nurse-at-betty-jean-kerr-people-s-health-centers-4459552161?position=12&pageNum=0&refId=5Ac4wgfaLUIzfql%2B5YkesQ%3D%3D&trackingId=SXNn4ytbyXLRF%2Fv%2F3cWUeA%3D%3D",
    "title": "Registered Nurse",
    "company": "Betty Jean Kerr People's Health Centers",
    "location": "St Louis, MO",
    "postedAt": "2026-09-23T00:00:00.000Z",
    "applicants": 25,
    "companyIndustry": "Hospitals and Health Care",
    "workMode": "not_stated",
    "experience": "1-2",
    "employmentType": "full_time",
    "visa": "not_mentioned",
    "salaryDisclosed": false,
    "skills": "BLS",
    "labels": {
      "workMode": {
        "label": "not_stated",
        "probability": 0.9,
        "confidence": 0.87
      },
      "experience": {
        "label": "1-2",
        "probability": 1,
        "confidence": 1
      },
      "employmentType": {
        "label": "full_time",
        "probability": 0.67,
        "confidence": 0.6
      },
      "visa": {
        "label": "not_mentioned",
        "probability": 1,
        "confidence": 1
      }
    },
    "model": "jev-1.13.0"
  }
]
```

## Price

$0.50 / 1,000 postings. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/job-posting-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

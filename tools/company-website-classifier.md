# Company Website Classifier — industry, B2B & ICP fit

`leoworks--company-website-classifier` · Apify actor [leoworks/company-website-classifier](https://apify.com/leoworks/company-website-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

**Code examples** (Python · JavaScript · curl · MCP config): [`examples/company-website-classifier/`](../examples/company-website-classifier/README.md)

Classify companies from their crawled websites: industry, business type, B2B/B2C, reach and fit to your ICP — tier and reason per company, emails and socials found on the site, COMPANIES.csv. No LLM key.

**People ask for this as:** *classify company websites* · *ICP fit scoring* · *B2B or B2C*

## Ask your AI agent

1. Does this company fit "B2B software companies selling to retailers"? https://acme-analytics.example.com/ — "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada."
2. Classify the websites in my Website Content Crawler dataset YOUR_DATASET_ID and keep only the companies that fit "Independent dental practices (not chains)", with the fit score and reason.
3. Tell me the industry, business type, B2B or B2C and reach of this company from its homepage text: "Bright Smile Dental is a family-owned dental practice in South Austin. Dr. Lee and our team offer cleanings, fillings, Invisalign and same-day crowns. New patients welcome."

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/company-website-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "pages": [
    {
      "url": "https://acme-analytics.example.com/",
      "title": "Acme Analytics — demand forecasting for retailers",
      "text": "Acme Analytics helps mid-size retailers forecast demand. Connect Shopify, NetSuite or your POS, and get store-level forecasts every morning. Trusted by 300 retail brands in the US, UK and Canada. Start a 14-day free trial — plans from $49 per month."
    },
    {
      "url": "https://brightsmile-dental.example.org/",
      "title": "Bright Smile Dental — family dentist in Austin, TX",
      "text": "Bright Smile Dental is a family-owned dental practice in South Austin. Dr. Lee and our team offer cleanings, fillings, Invisalign and same-day crowns. New patients welcome — call or book online. We accept most PPO insurance plans."
    }
  ],
  "icp": "Independent dental practices (not chains)"
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-11`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "domain": "pumpfitnesschicago.com",
    "companyName": "Pump High Energy",
    "url": "https://pumpfitnesschicago.com/",
    "title": "Home - Pump High Energy",
    "description": "Chicago gym with sports performance training, personal and group training.",
    "pagesFound": 3,
    "pagesUsed": 3,
    "language": "en-US",
    "fitScore": 94,
    "tier": "A",
    "qualified": true,
    "industry": "fitness_wellness",
    "businessType": "in_person_services",
    "customerType": "consumers",
    "reach": "local",
    "customLabelsMatched": "offers small-group classes",
    "labels": {
      "industry": {
        "label": "fitness_wellness",
        "probability": 1,
        "confidence": 1
      },
      "businessType": {
        "label": "in_person_services",
        "probability": 1,
        "confidence": 1
      },
      "customerType": {
        "label": "consumers",
        "probability": 1,
        "confidence": 1
      },
      "reach": {
        "label": "local",
        "probability": 1,
        "confidence": 1
      },
      "icpMatch": {
        "probability": 0.94,
        "matched": true
      },
      "custom": [
        {
          "label": "offers small-group classes",
          "probability": 0.77,
          "matched": true
        }
      ]
    },
    "model": "jev-1.13.0",
    "reason": "Fits the ICP (94/100, tier A). Fitness & wellness, in-person services. Sells to consumers. Local reach. Contact found: phone. Matches: offers small-group classes."
  },
  {
    "domain": "fitthespace.com",
    "companyName": "The Space",
    "url": "https://fitthespace.com/",
    "title": "The Space – Fit The Space 4.0 – Redefined Personal Training – Functional. Applied. Fitness",
    "email": "contact@example.com",
    "pagesFound": 16,
    "pagesUsed": 5,
    "language": "en-US",
    "fitScore": 94,
    "tier": "A",
    "qualified": true,
    "industry": "fitness_wellness",
    "businessType": "in_person_services",
    "customerType": "consumers",
    "reach": "local",
    "customLabelsMatched": "",
    "labels": {
      "industry": {
        "label": "fitness_wellness",
        "probability": 1,
        "confidence": 1
      },
      "businessType": {
        "label": "in_person_services",
        "probability": 1,
        "confidence": 1
      },
      "customerType": {
        "label": "consumers",
        "probability": 1,
        "confidence": 1
      },
      "reach": {
        "label": "local",
        "probability": 1,
        "confidence": 1
      },
      "icpMatch": {
        "probability": 0.94,
        "matched": true
      },
      "custom": [
        {
          "label": "offers small-group classes",
          "probability": 0.44,
          "matched": false
        }
      ]
    },
    "model": "jev-1.13.0",
    "reason": "Fits the ICP (94/100, tier A). Fitness & wellness, in-person services. Sells to consumers. Local reach. Contact found: email, phone."
  }
]
```

## Price

$2 / 1,000 sites. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/company-website-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

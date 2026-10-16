# Google Maps Lead Qualifier — ICP lead score per place

`leoworks--google-maps-lead-qualifier` · Apify actor [leoworks/google-maps-lead-qualifier](https://apify.com/leoworks/google-maps-lead-qualifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

**Code examples** (Python · JavaScript · curl · MCP config): [`examples/google-maps-lead-qualifier/`](../examples/google-maps-lead-qualifier/README.md)

Score Google Maps places from any Google Maps scraper against your ideal customer in plain language: lead score, tier A–D, a reason per lead, chain check, emails and socials kept, LEADS.csv. Free filters. No LLM key.

**People ask for this as:** *qualify Google Maps leads* · *Google Maps lead scoring* · *ICP fit*

## Ask your AI agent

1. Find 20 cosmetic dentists in Chicago on Google Maps and score them against this ideal customer: "Dental practices that offer cosmetic dentistry such as veneers or teeth whitening". Show the top 5 with the reason for each score.
2. Search Google Maps for "yoga studio" in Austin, USA (15 places), score them for "Independent yoga studios that offer teacher training", skip chains and anything under 4.0 stars, and list the qualified ones with phone and website.
3. Take dataset YOUR_DATASET_ID from my Google Maps scraper run and tell me which places are independent gyms that offer personal training, ranked by lead score.

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

> **Cost note:** When the tool collects the places for you, compass' Google Maps scraper is billed to your Apify account on top (about $0.12 for 20 places; the estimate is in the run log before anything is collected), so keep the number of places small in a first agent session.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/google-maps-lead-qualifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "icp": "Dental practices that offer cosmetic dentistry such as teeth whitening, veneers or smile makeovers.",
  "places": [
    {
      "title": "Kimberly Smiles Cosmetic & General Dentistry",
      "categoryName": "Dentist",
      "categories": [
        "Dentist",
        "Cosmetic dentist",
        "Emergency dental service"
      ],
      "website": "https://dentistwickerparkchicago.com/",
      "city": "Chicago",
      "totalScore": 4.7,
      "reviewsCount": 484
    },
    {
      "title": "Kids Tooth Team",
      "categoryName": "Pediatric dentist",
      "categories": [
        "Pediatric dentist",
        "Dental clinic",
        "Dental hygienist"
      ],
      "website": "https://kidstoothteam.com/locations/our-south-austin-office/",
      "city": "Austin",
      "totalScore": 4.9,
      "reviewsCount": 740,
      "additionalInfo": {
        "Service options": [
          {
            "English": true
          }
        ],
        "Offerings": [
          {
            "Emergency services": true
          },
          {
            "Pediatric care": true
          },
          {
            "Sedation dentistry": true
          }
        ]
      }
    }
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-11`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "placeId": "ChIJkycpugMpDogRGcSEQk7iRgU",
    "title": "Anthos Training Clubs",
    "categoryName": "Personal trainer",
    "address": "1558 E 53rd St, Chicago, IL 60615",
    "city": "Chicago",
    "state": "Illinois",
    "countryCode": "US",
    "website": "http://www.anthostraining.com/",
    "domain": "anthostraining.com",
    "url": "https://www.google.com/maps/search/?api=1&query=Anthos%20Training%20Clubs&query_place_id=ChIJkycpugMpDogRGcSEQk7iRgU",
    "totalScore": 5,
    "reviewsCount": 92,
    "contactChannels": 2,
    "leadScore": 74,
    "tier": "A",
    "qualified": true,
    "isChain": false,
    "labels": {
      "icpMatch": {
        "probability": 0.74,
        "matched": true
      },
      "chain": {
        "probability": 0.14,
        "matched": false
      }
    },
    "model": "jev-1.13.0",
    "reason": "Fits the ICP (74/100, tier A). Independent. Reachable by website, phone. 5★ from 92 reviews."
  },
  {
    "placeId": "ChIJnSbu0dPRD4gRCikIcFsQI8c",
    "title": "Vbody Power Fitness",
    "categoryName": "Personal trainer",
    "address": "900 E 47th St, Chicago, IL 60653",
    "city": "Chicago",
    "state": "Illinois",
    "countryCode": "US",
    "website": "https://www.vbodypowerfitness.com/",
    "domain": "vbodypowerfitness.com",
    "url": "https://www.google.com/maps/search/?api=1&query=Vbody%20Power%20Fitness&query_place_id=ChIJnSbu0dPRD4gRCikIcFsQI8c",
    "totalScore": 4.9,
    "reviewsCount": 57,
    "contactChannels": 2,
    "leadScore": 69,
    "tier": "A",
    "qualified": true,
    "isChain": false,
    "labels": {
      "icpMatch": {
        "probability": 0.69,
        "matched": true
      },
      "chain": {
        "probability": 0.09,
        "matched": false
      }
    },
    "model": "jev-1.13.0",
    "reason": "Fits the ICP (69/100, tier A). Independent. Reachable by website, phone. 4.9★ from 57 reviews."
  }
]
```

## Price

$2 / 1,000 places (+ compass' Google Maps scraper, billed separately, when the tool collects the places — see the cost note). Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/google-maps-lead-qualifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

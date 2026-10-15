# Google Maps Review Classifier — complaints & replies

`leoworks--google-maps-review-classifier` · Apify actor [leoworks/google-maps-review-classifier](https://apify.com/leoworks/google-maps-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

Classify Google Maps reviews from any Google Maps reviews scraper's dataset: complaint types, what customers praise, serious issues (safety, discrimination, fraud), sentiment and unanswered reviews — plus a reply queue and per-place CSV. No LLM key.

**People ask for this as:** *Google Maps review analysis* · *Google Maps reviews sentiment* · *classify Google Maps reviews*

## Ask your AI agent

1. Analyze the Google Maps reviews of Joe's Pizza Broadway in New York (place ID ChIJifIePKtZwokRVZ-UdRGkZzs): classify the newest 20 reviews, tell me the top complaint types and which reviews have no owner reply yet.
2. Compare Joe's Pizza Broadway (ChIJifIePKtZwokRVZ-UdRGkZzs) and Katz's Delicatessen (ChIJCar0f49ZwokR6ozLV-dHNTE) using 20 newest reviews each — which one has more serious-issue alerts, and what do customers praise at each?
3. Classify these Google reviews and tell me which ones need an owner reply: "Waited 50 minutes and nobody apologised." / "Best slice in town, will be back." / "They charged my card twice and ignored my emails."

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

> **Cost note:** When the tool collects the reviews for you, compass' scraper is billed to your Apify account on top (about $0.05 for 2 places with 20 reviews each), so keep the number of places and reviews small in a first agent session.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/google-maps-review-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "places": [
    "https://www.google.com/maps/search/?api=1&query=Joe's%20Pizza%20Broadway&query_place_id=ChIJifIePKtZwokRVZ-UdRGkZzs",
    "https://www.google.com/maps/search/?api=1&query=Katz's%20Delicatessen&query_place_id=ChIJCar0f49ZwokR6ozLV-dHNTE"
  ],
  "maxReviewsPerPlace": 20
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-15`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "index": 0,
    "rating": null,
    "text": "Waited 40 minutes past our reservation and the host was rude about it.",
    "complaintTypes": "wait, staff, booking",
    "praiseTypes": "",
    "alert": false,
    "sentiment": "negative",
    "needsReply": true,
    "customLabelsMatched": "",
    "labels": {
      "complaint": [
        {
          "label": "wait",
          "probability": 0.98
        },
        {
          "label": "staff",
          "probability": 0.97
        },
        {
          "label": "booking",
          "probability": 0.9
        }
      ],
      "praise": [],
      "alert": {
        "probability": 0.04,
        "matched": false
      },
      "sentiment": {
        "label": "negative",
        "probability": 1,
        "confidence": 1
      },
      "needsReply": {
        "probability": 0.97,
        "matched": true
      },
      "custom": [
        {
          "label": "mentions parking",
          "probability": 0.01,
          "matched": false
        }
      ],
      "complaintScores": [
        {
          "label": "staff",
          "probability": 0.97
        },
        {
          "label": "wait",
          "probability": 0.98
        },
        {
          "label": "quality",
          "probability": 0.05
        }
      ]
    },
    "model": "jev-1.13.0"
  },
  {
    "index": 2,
    "rating": null,
    "text": "Best tacos in town, friendly staff and fast service.",
    "complaintTypes": "none",
    "praiseTypes": "staff, wait, quality",
    "alert": false,
    "sentiment": "positive",
    "needsReply": false,
    "customLabelsMatched": "",
    "labels": {
      "complaint": [
        {
          "label": "none",
          "probability": 0.98
        }
      ],
      "praise": [
        {
          "label": "staff",
          "probability": 0.98
        },
        {
          "label": "wait",
          "probability": 0.97
        },
        {
          "label": "quality",
          "probability": 0.94
        }
      ],
      "alert": {
        "probability": 0.01,
        "matched": false
      },
      "sentiment": {
        "label": "positive",
        "probability": 1,
        "confidence": 1
      },
      "needsReply": {
        "probability": 0.04,
        "matched": false
      },
      "custom": [
        {
          "label": "mentions parking",
          "probability": 0.01,
          "matched": false
        }
      ],
      "complaintScores": [
        {
          "label": "staff",
          "probability": 0.01
        },
        {
          "label": "wait",
          "probability": 0.01
        },
        {
          "label": "quality",
          "probability": 0.01
        }
      ]
    },
    "model": "jev-1.13.0"
  }
]
```

## Price

$0.50 / 1,000 reviews (+ compass' Google Maps scraper, billed separately, when the tool collects the reviews — see the cost note). Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/google-maps-review-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

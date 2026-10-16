# Social Comment Classifier — buying intent & questions

`leoworks--social-comment-classifier` · Apify actor [leoworks/social-comment-classifier](https://apify.com/leoworks/social-comment-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo) · used here as an MCP tool through the official Apify MCP server.

**Code examples** (Python · JavaScript · curl · MCP config): [`examples/social-comment-classifier/`](../examples/social-comment-classifier/README.md)

Classify Instagram, TikTok, Facebook and YouTube comments from any comment scraper's dataset: purchase intent, questions, complaints, requests, praise, spam and sentiment, with probabilities. Comment sentiment analysis, no prompts, no LLM key.

**People ask for this as:** *Instagram comments sentiment* · *TikTok comments analyzer* · *buying intent*

## Ask your AI agent

1. Which of these comments are from people who want to buy? "Where can I buy this in Canada? Need it!!" / "Ordered 3 weeks ago and still nothing. Is anyone answering messages?" / "Love the colour 😍"
2. Classify dataset YOUR_DATASET_ID from my TikTok comments scraper run and list the unanswered questions and complaints first.
3. Which of these Instagram comments are spam and which need a reply? "Follow me for free gift cards!!" / "Does it come in size L?" / "Not working, I want my money back."

Prompts with `YOUR_DATASET_ID` take the ID of a dataset from your own earlier Apify run.

## Connect only this tool

```
https://mcp.apify.com/?tools=leoworks/social-comment-classifier
```

Same setup as the [full server](../README.md#connect) — just a shorter `?tools=` list.

## Input example

```json
{
  "texts": [
    "Where can I buy this in Canada? Need it!!",
    "Ordered 3 weeks ago and still nothing. Is anyone answering messages?"
  ]
}
```

## Sample output (first rows)

Real rows from an earlier run (`2026-10-15`), cut to two rows and three list items; long text shortened, contact and profile fields removed.

```json
[
  {
    "index": 2,
    "isReply": false,
    "text": "Can you make this in black? I would buy two.",
    "type": "purchase_intent",
    "sentiment": "positive",
    "needsReply": true,
    "emojiOnly": false,
    "customLabelsMatched": "",
    "labels": {
      "type": {
        "label": "purchase_intent",
        "probability": 0.66,
        "confidence": 0.6
      },
      "sentiment": {
        "label": "positive",
        "probability": 0.72,
        "confidence": 0.58
      },
      "needsReply": {
        "probability": 0.84,
        "matched": true
      },
      "custom": [
        {
          "label": "asks about shipping",
          "probability": 0.02,
          "matched": false
        }
      ],
      "typeScores": [
        {
          "label": "purchase_intent",
          "probability": 0.66
        },
        {
          "label": "request",
          "probability": 0.34
        },
        {
          "label": "spam",
          "probability": 0
        }
      ]
    },
    "model": "jev-1.13.0"
  },
  {
    "index": 3,
    "isReply": false,
    "text": "DM me to earn $500 a day from home 💰💰",
    "type": "spam",
    "sentiment": "neutral",
    "needsReply": false,
    "emojiOnly": false,
    "customLabelsMatched": "",
    "labels": {
      "type": {
        "label": "spam",
        "probability": 1,
        "confidence": 1
      },
      "sentiment": {
        "label": "neutral",
        "probability": 0.94,
        "confidence": 0.91
      },
      "needsReply": {
        "probability": 0.05,
        "matched": false
      },
      "custom": [
        {
          "label": "asks about shipping",
          "probability": 0.01,
          "matched": false
        }
      ],
      "typeScores": [
        {
          "label": "spam",
          "probability": 1
        },
        {
          "label": "purchase_intent",
          "probability": 0
        },
        {
          "label": "complaint",
          "probability": 0
        }
      ]
    },
    "model": "jev-1.13.0"
  }
]
```

## Price

$0.50 / 1,000 comments. Billed per result on your Apify account; Apify's free monthly credit covers small tests.

Full field list and limits: [actor page on Apify](https://apify.com/leoworks/social-comment-classifier?utm_source=github&utm_medium=owned&utm_campaign=apify-v1&utm_content=mcp-repo).

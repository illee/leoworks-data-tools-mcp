#!/usr/bin/env bash
# leoworks/spanish-review-classifier — synchronous run: POST the input, get the dataset rows back (waits up to 5 minutes).
# Needs APIFY_TOKEN in your environment (Apify Console → Settings → API & Integrations).
curl -s -X POST "https://api.apify.com/v2/acts/leoworks~spanish-review-classifier/run-sync-get-dataset-items?limit=5" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<'JSON'
{
  "texts": [
    "El paquete llegó aplastado y uno de los auriculares no funciona.",
    "Tardó dos semanas en llegar y el vendedor no contesta los mensajes.",
    "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!",
    "La talla no corresponde, me quedó pequeño. Quiero devolverlo."
  ],
  "customLabels": [
    "mentions the smell"
  ]
}
JSON

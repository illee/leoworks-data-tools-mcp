"""leoworks/spanish-review-classifier — run it and print the first rows. Needs: pip install apify-client, and APIFY_TOKEN in your environment."""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])  # Apify Console → Settings → API & Integrations

run_input = {
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

run = client.actor("leoworks/spanish-review-classifier").call(run_input=run_input)
print("run:", run["id"], run["status"])
for i, item in enumerate(client.dataset(run["defaultDatasetId"]).iterate_items()):
    print({k: item.get(k) for k in ["text", "labels"]})
    if i == 4:
        break

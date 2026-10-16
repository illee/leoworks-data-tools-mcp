// leoworks/spanish-review-classifier — run it and print the first rows. Needs: npm install apify-client, and APIFY_TOKEN in your environment.
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN }); // Apify Console → Settings → API & Integrations

const input = {
  "texts": [
    "El paquete llegó aplastado y uno de los auriculares no funciona.",
    "Tardó dos semanas en llegar y el vendedor no contesta los mensajes.",
    "Siempre lo compro, excelente calidad. ¡Lo volvería a comprar!",
    "La talla no corresponde, me quedó pequeño. Quiero devolverlo."
  ],
  "customLabels": [
    "mentions the smell"
  ]
};

const run = await client.actor('leoworks/spanish-review-classifier').call(input);
console.log('run:', run.id, run.status);
const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 5 });
for (const item of items) {
    console.log(Object.fromEntries(["text", "labels"].map((k) => [k, item[k]])));
}

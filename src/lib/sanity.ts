// pages/index.js
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "cbpetbyv",
  dataset: "production",
  apiVersion: "2023-04-08",
  token: process.env.SANITY_API_TOKEN,
  //   token:
  //     "skxudVPcCLxtifq6PvpS93ictFmwVQUgAltxhGrFoIVhKPAvKIL65xFw5caJnUYVJRLNsJastFFRg13sqtGTVq6z33x4jZsIDbN42TgPmVdJVjfiuYw6iKuBjzBpUVilXCaDuKRxUbODY9MPyVp1ejJ3D33sVRf7Twx3YjDJuHkI3z4O3ALt",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}

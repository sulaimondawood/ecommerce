// pages/index.js
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "cbpetbyv",
  dataset: "production",
  apiVersion: "2023-04-08",
  token: process.env.SANITY_API_TOKEN,

  useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}

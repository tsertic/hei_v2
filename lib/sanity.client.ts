import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const PROJECTID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const APIVERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const TOKEN = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const config = {
  projectId: PROJECTID || "",
  dataset: DATASET || "",
  apiVersion: APIVERSION || "",
  useCdn: true,
  token: TOKEN,
};
export const client = createClient(config);
function createImageUrlBuilder(config: any) {
  throw new Error("Function not implemented.");
}

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

import { createClient } from "next-sanity";

export const PROJECTID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const APIVERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const TOKEN = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = createClient({
  projectId: PROJECTID,
  dataset: DATASET,
  apiVersion: APIVERSION,
  useCdn: false,
  token: TOKEN,
});

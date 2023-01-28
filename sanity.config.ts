import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
const PROJECTID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
export default defineConfig({
  name: "HEI",
  title: "HEI studio",
  basePath: "/studio",

  projectId: PROJECTID ? PROJECTID : "",
  dataset: DATASET ? DATASET : "",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

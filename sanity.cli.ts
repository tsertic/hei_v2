import { defineCliConfig } from "sanity/cli";
const PROJECTID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
export default defineCliConfig({
  api: {
    projectId: PROJECTID ? PROJECTID : "",
    dataset: DATASET ? DATASET : "",
  },
});

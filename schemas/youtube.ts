import { YtPreview } from "../components/sanity-schema/youtube";
import { defineField, defineType } from "sanity";
// youtube.js
export default defineField({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
  },
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "feedback",
  title: "Feedback",
  type: "document",
  fields: [
    defineField({
      name: "odgovoreno",
      title: "Odgovoreno",

      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "date",
      title: "Datum Feedbacka",

      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "poruka",
      title: "Poruka",
      type: "text",
    }),
  ],
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Kontakt",
  type: "document",
  fields: [
    defineField({
      name: "responded",
      title: "Odgovoreno",

      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "date",
      title: "Datum Poruke",

      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: "name",
      title: "Ime",
      type: "string",
    }),
    defineField({
      name: "surname",
      title: "Prezime",
      type: "string",
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

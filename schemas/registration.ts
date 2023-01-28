import { defineField, defineType } from "sanity";

export default defineType({
  name: "registration",
  title: "Registration Requests",
  type: "document",
  fields: [
    defineField({
      name: "approved",
      title: "Odobreno",

      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "date",
      title: "Datum Zahtjeva",

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
      name: "birthDate",
      title: "Datum Rodjenja",
      type: "string",
    }),
    defineField({
      name: "heard_about_hei",
      title: "Saznali za HEI",
      type: "string",
    }),
    defineField({
      name: "poruka",
      title: "Poruka",
      type: "text",
    }),
  ],
});

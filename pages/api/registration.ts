// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/sanity.client";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.message ||
      !data.surname ||
      !data.birthDate
    ) {
      return res.status(400).json({ message: "Bad Request22", success: false });
    }
    const { name, surname, email, message, heardAbout, birthDate } = data;
    try {
      await client.create({
        _type: "registration",
        name,
        surname,
        email,
        birthDate,
        heard_about_hei: heardAbout,
        poruka: message,
      });

      return res.status(201).json({ success: true, message: "Success" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message, success: false });
    }
  }
  res.status(400).json({ message: "Bad Request", success: false });
};

export default handler;

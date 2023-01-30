// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/sanity.client";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message || !data.surname) {
      return res.status(400).json({ message: "Bad Request22" });
    }
    try {
      await client.create({
        _type: "contact",
        name: data.name,
        surname: data.surname,
        email: data.email,
        poruka: data.message,
      });
      res.status(201).json({ success: true, message: "Succesful send" });
    } catch (error) {
      res.status(501).json({ success: false, message: error });
    }
  }
  if (req.method !== "POST") {
    res.status(400).json({ success: false, message: "Bad Request" });
  }
};

export default handler;

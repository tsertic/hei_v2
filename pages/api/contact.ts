// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "./../../config/nodemailer";
type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message || !data.surname) {
      return res.status(400).json({ message: "Bad Request22" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Prijava za clanstvo od : ${data.name} ${data.surname} `,
        text: `From: ${data.name} ${data.surname} Email: ${data.email} Message: ${data.message}`,
        html: `<p>From: ${data.name} ${data.surname}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
  res.status(400).json({ message: "Bad Request" });
};

export default handler;

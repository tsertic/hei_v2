import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

export const mailOptions = {
  from: process.env.ZOHO_USER,
  to: "tsertic5@gmail.com",
};

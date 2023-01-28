import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("PReview");
  res.setPreviewData({});
  res.writeHead(307, { location: "/" });
  res.end();
};
export default handler;

import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({});
  res.writeHead(307, { location: "/" });
  res.end();
};
export default handler;

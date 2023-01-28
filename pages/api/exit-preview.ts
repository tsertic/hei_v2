import { NextApiRequest, NextApiResponse } from "next";

const exit = (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData();
  res.writeHead(307, { location: "/" });
  res.end();
};

export default exit;

import { NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (_: any, res: NextApiResponse) => {
  res.clearPreviewData();

  res.writeHead(307, { Location: '/' });
  res.end();
};

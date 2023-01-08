import { NextApiResponse, NextApiRequest } from 'next';
import MERCADO_LIVRE_API_CLIENT from '@/config/MERCADO_LIVRE_API_CLIENT';
import { parseListItemData } from '@/utils/parseListItemData';
import { GetListItem } from '@/interfaces/BFF';

/**
 * @swagger
 * /api/items:
 *   get:
 *     description: Returns the list Items
 *     responses:
 *       200:
 *         description: list items
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  const {
    method,
    query: { q },
  } = req;
  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
  const { data } = await MERCADO_LIVRE_API_CLIENT.get<GetListItem>(
    `/sites/MLA/search?q=query&limit=4`
  );

  //users/161560823
  // address -> city
  // console.log(data.);
  const parseResponse = parseListItemData(data);

  return res.status(200).json(parseResponse);
}

import { NextApiResponse, NextApiRequest } from 'next';
import MERCADO_LIVRE_API_CLIENT from '@/config/MERCADO_LIVRE_API_CLIENT';
import { ItemDTO } from '@/interfaces/Front';
import { parseItemData } from '@/utils/parseItemData';
// import { Item } from '@/interfaces/item';
// import axios from '@/config/axios';

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
  res: NextApiResponse<ItemDTO[]>
) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  const { method } = req;
  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
  const { data } = await MERCADO_LIVRE_API_CLIENT.get(
    '/sites/MLA/search?q=:query&limit=4'
  );
  const {} = data;
  // const parsedListItem = () => {
  //   parseItemData();
  // };
  return res.status(200).json(data);
}

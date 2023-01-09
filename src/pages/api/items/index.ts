import { NextApiResponse, NextApiRequest } from 'next';
import { parseListItems } from '@/utils/parseListItemData';
import { currencyService, itemService } from 'src/services';

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
    query: { search },
  } = req;

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
    return;
  }
  const { data } = await itemService.getAll(search as string);
  const { currency_id } = data.results[0];
  const { data: currency } = await currencyService(currency_id);
  const parseResponse = parseListItems(data, currency);

  return res.status(200).json(parseResponse);
}

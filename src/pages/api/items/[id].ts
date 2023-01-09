import { NextApiRequest, NextApiResponse } from 'next';
import { parseItemData } from '@/utils/parseItemData';
import { ItemDTO } from '@/interfaces/Front';

import {
  categoryService,
  currencyService,
  descriptionService,
  itemService,
} from 'src/services';

/**
 * @swagger
 * /api/items/:id :
 *   get:
 *     description: Returns the details Item
 *     responses:
 *       200:
 *         description: item
 */

type ResponseError = {
  statusCode?: string;
  message?: string;
};

export default async function itemHandler(
  req: NextApiRequest,
  res: NextApiResponse<ItemDTO | ResponseError>
) {
  try {
    const {
      query: { id },
      method,
    } = req;
    if (method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
    const { data: item } = await itemService.getById(id as string);
    const { currency_id, category_id } = item;
    const { data: currency } = await currencyService(currency_id);
    const { data: descriptionItem } = await descriptionService(id as string);
    const { data: categories } = await categoryService(category_id);

    const parsedItem = parseItemData({
      item,
      currency,
      descriptionItem,
      categories,
    });
    res.status(200).json({ ...parsedItem });
  } catch (error) {
    res.status(404).send({ statusCode: '404', message: 'Item not found' });
  }
}

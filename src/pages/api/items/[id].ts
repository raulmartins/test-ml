import { NextApiRequest, NextApiResponse } from 'next';
import MERCADO_LIVRE_API_CLIENT from '@/config/MERCADO_LIVRE_API_CLIENT';
import { ItemGetById } from '@/interfaces/BFF/Item';
import { DescriptionDTO } from '@/interfaces/BFF/description';
import { CurrencyDTO } from '@/interfaces/BFF';
import { parseItemData } from '@/utils/parseItemData';
import { ItemDTO } from '@/interfaces/Front';

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
    const { data: item } = await MERCADO_LIVRE_API_CLIENT.get<ItemGetById>(
      `/items/${id}`
    );
    const { currency_id } = item;
    const { data: currency } = await MERCADO_LIVRE_API_CLIENT.get<CurrencyDTO>(
      `/currencies/${currency_id}`
    );

    const { data: descriptionItem } =
      await MERCADO_LIVRE_API_CLIENT.get<DescriptionDTO>(
        `/items/${id}/description`
      );

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    const parsedItem = parseItemData({ item, currency, descriptionItem });
    res.status(200).json({ ...parsedItem });
  } catch (error) {
    res.status(404).send({ statusCode: '404', message: 'Item not found' });
  }
}

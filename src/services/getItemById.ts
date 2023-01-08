import { ItemDTO } from '@/interfaces/Front/item';
import BFF_API_CLIENT from '@/config/BFF_API_CLIENTE';

type GetItemById = (id: string) => Promise<ItemDTO | null>;

export const getItemById: GetItemById = async (id: string) => {
  try {
    const response = await BFF_API_CLIENT.get<ItemDTO>(`/items/${id}`);
    const itemDetails = response.data;

    return itemDetails;
  } catch (error) {
    return null;
  }
};

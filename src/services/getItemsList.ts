import BFF_API_CLIENT from '@/config/BFF_API_CLIENTE';
import { ItemListDTO } from '@/interfaces/Front';

type GetItemsList = (search: string) => Promise<ItemListDTO> | null;

export const getItemsList: GetItemsList = async (search) => {
  try {
    const response = await BFF_API_CLIENT.get('/items', {
      params: { search },
    });

    return response.data;
  } catch (error) {
    return null;
  }
};

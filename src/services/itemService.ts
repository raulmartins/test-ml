import MERCADO_LIVRE_API_CLIENT from '@/config/MERCADO_LIVRE_API_CLIENT';
import { GetListItem, ItemGetById } from '@/interfaces/BFF';

const getById = (id: string) =>
  MERCADO_LIVRE_API_CLIENT.get<ItemGetById>(`/items/${id}`);

const getAll = (search: string) =>
  MERCADO_LIVRE_API_CLIENT.get<GetListItem>(
    `/sites/MLA/search?q=${search || 'money'}&limit=4`
  );

export { getById, getAll };

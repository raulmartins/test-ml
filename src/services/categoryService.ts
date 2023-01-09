import MERCADO_LIVRE_API_CLIENT from '@/config/MERCADO_LIVRE_API_CLIENT';
import { CategoryById } from '@/interfaces/BFF';

const categoryService = (id: string) =>
  MERCADO_LIVRE_API_CLIENT.get<CategoryById>(`/categories/${id}`);

export { categoryService };

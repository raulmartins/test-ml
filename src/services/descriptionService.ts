import MERCADO_LIVRE_API_CLIENT from '@/config/MERCADO_LIVRE_API_CLIENT';
import { DescriptionDTO } from '@/interfaces/BFF';

const descriptionService = (id: string) =>
  MERCADO_LIVRE_API_CLIENT.get<DescriptionDTO>(`/items/${id}/description`);

export { descriptionService };

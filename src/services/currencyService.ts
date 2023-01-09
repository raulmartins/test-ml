import MERCADO_LIVRE_API_CLIENT from '@/config/MERCADO_LIVRE_API_CLIENT';
import { CurrencyDTO } from '@/interfaces/BFF';

const currencyService = (id: string) =>
  MERCADO_LIVRE_API_CLIENT.get<CurrencyDTO>(`/currencies/${id}`);

export { currencyService };

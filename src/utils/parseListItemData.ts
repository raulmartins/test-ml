import { CurrencyDTO } from './../interfaces/BFF/currency';
import { parseItemData } from './parseItemData';
import { GetListItem } from '@/interfaces/BFF';
import { ItemListDTO } from '@/interfaces/Front';

type ParseListItem = (data: GetListItem, currency: CurrencyDTO) => ItemListDTO;

const parseListItems: ParseListItem = (data, currency) => {
  const { results, paging } = data;

  const parsedResult = results.map((item) => {
    const { thumbnail } = item;
    const pictures = [{ url: thumbnail, id: '' }];
    const city = item.seller_address.city.name;

    const parsedItemData = parseItemData({
      currency,
      item: { ...item, pictures },
    });
    return { ...parsedItemData, city };
  });
  return { items: parsedResult, paging };
};

export { parseListItems };

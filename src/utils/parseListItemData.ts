import { GetListItem } from '@/interfaces/BFF';

export const parseListItemData = (data: GetListItem) => {
  const { paging } = data;
  const results = data.results.map(
    ({
      id,
      title,
      price,
      shipping: { free_shipping },
      thumbnail,
      seller_address: { city },
    }) => ({
      id,
      title,
      price,
      free_shipping,
      thumbnail,
      city,
    })
  );
  return { paging, results };
};

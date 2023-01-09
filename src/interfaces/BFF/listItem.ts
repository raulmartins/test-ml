import { ItemGetById } from './Item';

export type ItemDTO = Omit<ItemGetById, 'pictures'> & {
  thumbnail: string;
  seller_address: SellerAddressDTO;
};

export type GetListItem = {
  paging: PagingDTO;
  results: ItemDTO[];
};
export type ListItemDTO = {
  paging: PagingDTO;
  query: string;
  results: ItemDTO[];
};

export type PagingDTO = {
  limit: number;
  offset: number;
};

export type SellerAddressDTO = {
  city: CityDTO;
};

export type CityDTO = {
  id: string;
  name: string;
};

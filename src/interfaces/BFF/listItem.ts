import { ShippingDTO } from './Item';
export type GetListItem = {
  paging: PagingDTO;
  query: string;
  results: ItemDTO[];
};

export type PagingDTO = {
  limit: number;
  offset: number;
};

export type ItemDTO = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  shipping: ShippingDTO;
  seller_address: SellerAddressDTO;
};

export type SellerAddressDTO = {
  city: CityDTO;
};

export type CityDTO = {
  id: string;
  name: string;
};

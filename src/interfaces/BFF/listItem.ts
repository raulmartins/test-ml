export type GetListItem = {
  paging: PagingDTO;
  query: string;
  results: ItemDTO[];
};

export type ShippingDTO = {
  free_shipping: boolean;
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

export type PictureDTO = {
  id: string;
  url: string;
};

export type SellerAddressDTO = {
  city: CityDTO;
};

export type CityDTO = {
  id: string;
  name: string;
};

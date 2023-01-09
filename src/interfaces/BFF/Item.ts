export type ShippingDTO = {
  free_shipping: boolean;
};

export type PictureDTO = {
  id: string;
  url: string;
};

export type ItemGetById = {
  id: string;
  title: string;
  pictures: PictureDTO[];
  condition: string;
  sold_quantity: number;
  price: number;
  currency_id: string;
  shipping: ShippingDTO;
  category_id: string;
};

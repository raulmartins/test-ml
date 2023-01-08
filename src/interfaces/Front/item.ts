export type AuthorDTO= {
  name: string;
  lastname: string;
};

export type ItemDTO = {
  id: string;
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  price: {
    currency: string;
    amount: number;
    decimal: number;
  };
};

export type ItemPayload = {
  author: AuthorDTO;
  item: ItemDTO;
};

import { PagingDTO } from './../BFF/listItem';
import { ItemDTO } from './item';

export type ItemIntoList = Omit<ItemDTO, 'sold_quantity' | 'description'> & {
  city: string;
};

export type ItemListDTO = {
  author?: {
    name: String;
    lastname: String;
  };
  categories?: string[];
  items: ItemIntoList[];
  paging: PagingDTO;
};

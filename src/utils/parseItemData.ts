import { CategoryById, PathFromRoot } from './../interfaces/BFF/category';
import { CurrencyDTO, DescriptionDTO, ItemGetById } from '@/interfaces/BFF';
import { ItemDTO } from '@/interfaces/Front/item';

type Props = {
  item: ItemGetById;
  descriptionItem?: DescriptionDTO;
  currency: CurrencyDTO;
  categories?: CategoryById;
};

type ParseItemData = (data: Props) => ItemDTO;

export const parseItemData: ParseItemData = ({
  currency: { symbol },
  descriptionItem = {} as DescriptionDTO,
  item,
  categories,
}) => {
  const { plain_text: description = '' } = descriptionItem;
  const {
    id,
    title,
    pictures,
    sold_quantity,
    price: priceFloat,
    condition: conditionItem,
    shipping: { free_shipping },
  } = item;

  const picture = pictures[0].url;
  const condition = conditionItem === 'new' ? 'Novo' : 'Usado';
  const [amount, decimal] = String(priceFloat).split('.');
  const price = {
    currency: symbol,
    amount: +amount,
    decimal: +decimal,
  };

  const listCategory = categories ? categories.path_from_root : [];
  const category = listCategory.map((cat) => cat.name);
  return {
    id,
    title,
    condition,
    description,
    free_shipping,
    picture,
    price,
    sold_quantity,
    category,
  };
};

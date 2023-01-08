import { ItemDTO } from '@/interfaces/Front/item';
import Image from 'next/image';
import { Button } from '../Button';
import Styles from './styles.module.scss';

type Props = {
  itemDetails: ItemDTO;
};

const ItemDetails: React.FC<Props> = ({ itemDetails }) => {
  const { picture, condition, sold_quantity, title, price, description } =
    itemDetails;
  const { currency = '', amount, decimal } = price;

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapperIlustration}>
        <Image
          src={picture}
          height={400}
          width={400}
          alt='Imagem do produto selecionado.'
          className={Styles.image}
          priority
        />
        <div className={Styles.wrapperDetails}>
          <span
            className={Styles.status}
          >{`${condition} - ${sold_quantity} vendidos`}</span>
          <strong className={Styles.title}>{title}</strong>
          <span className={Styles.price}>
            <span className={Styles.currency}>{currency}</span>
            <span className={Styles.amount}>{amount}</span>
            <span className={Styles.decimal}>{decimal}</span>
          </span>

          <Button type='button'>Comprar</Button>
        </div>
      </div>
      <div className={Styles.wrapperDescription}>
        <h2>Descrição do produto</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { ItemDetails };

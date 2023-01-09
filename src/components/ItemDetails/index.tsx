import { ItemDTO } from '@/interfaces/Front/item';
import Image from 'next/image';
import { Button } from '../Button';
import { Price } from '../Price';
import Styles from './styles.module.scss';

type Props = {
  itemDetails: ItemDTO;
};

const ItemDetails: React.FC<Props> = ({ itemDetails }) => {
  const { picture, condition, sold_quantity, title, price, description } =
    itemDetails;

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapperIlustration}>
        <Image
          src={picture}
          height={400}
          width={400}
          alt='Imagem do produto selecionado.'
          loading='lazy'
          unoptimized={true}
          className={Styles.image}
        />
        <div className={Styles.wrapperDetails}>
          <span
            className={Styles.status}
          >{`${condition} - ${sold_quantity} vendidos`}</span>
          <strong className={Styles.title}>{title}</strong>
          <Price price={price} />

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

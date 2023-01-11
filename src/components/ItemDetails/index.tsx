import { ItemDTO } from '@/interfaces/Front/item';
import { Button } from '../Button';
import { Price } from '../Price';
import Zoom from 'next-image-zoom';
import Styles from './styles.module.scss';

type Props = {
  itemDetails: ItemDTO;
};

const ItemDetails: React.FC<Props> = ({ itemDetails }) => {
  const { picture, condition, sold_quantity, title, price, description } =
    itemDetails;

  return (
    <div data-testid='item-details' className={Styles.container}>
      <div className={Styles.wrapperIlustration}>
        <div className={Styles.image}>
          <Zoom
            src={picture}
            height={400}
            width={400}
            alt='Imagem do produto selecionado.'
            loading='lazy'
            style={{
              objectFit: 'contain',
              width: '100%',
            }}
          />
        </div>
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

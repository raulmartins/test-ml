import Image from 'next/image';
import Styles from './styles.module.scss';
import { BsTruck } from 'react-icons/bs';
import { ItemIntoList } from '@/interfaces/Front';
import { Price } from '@/components/Price';
import Link from 'next/link';

type Props = {
  item: ItemIntoList;
};

function Card({ item }: Props) {
  const { price, free_shipping, picture, title, city, id } = item;

  const urlToRedirect = `/items/${id}`;

  return (
    <div id='card' className={Styles.card}>
      <Link href={urlToRedirect}>
        <div>
          <Image
            className={Styles.cardImage}
            src={picture}
            alt={title}
            height={150}
            width={150}
            unoptimized={true}
            loading='lazy'
          />
        </div>
      </Link>
      <div className={Styles.containerContent}>
        <div className={Styles.containerValue}>
          <Price price={price} />
          {free_shipping && (
            <span className={Styles.badgeDelivery}>
              <BsTruck />
            </span>
          )}
        </div>
        <Link href={urlToRedirect}>
          <div className={Styles.cardDescription}>
            <p>{title}</p>
          </div>
        </Link>
      </div>
      <div className={Styles.cardCity}>
        <p>{city}</p>
      </div>
    </div>
  );
}

export { Card };

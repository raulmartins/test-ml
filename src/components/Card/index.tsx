import Image from 'next/image';
import Style from './card.module.scss';
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
    <div id='card' className={Style.card}>
      <Link href={urlToRedirect}>
        <div>
          <Image
            className={Style.cardImage}
            src={picture}
            alt={title}
            height={150}
            width={150}
            object-fit='scale-down'
          />
        </div>
      </Link>
      <div className={Style.containerContent}>
        <div className={Style.containerValue}>
          <Price price={price} />
          {free_shipping && (
            <span className={Style.badgeDelivery}>
              <BsTruck />
            </span>
          )}
        </div>
        <Link href={urlToRedirect}>
          <div className={Style.cardDescription}>
            <p>{title}</p>
          </div>
        </Link>
      </div>
      <div className={Style.cardCity}>
        <p>{city}</p>
      </div>
    </div>
  );
}

export { Card };

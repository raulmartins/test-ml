import Image from 'next/image';
import Style from './card.module.scss';
import { BsTruck } from 'react-icons/bs';

type Card = {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  city: string;
};

function Card(props: Card) {
  const { name, price, description, imageUrl, city } = props;

  const handleClickCard: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    console.log('here', description);
  };

  return (
    <div className={Style.card} onClick={handleClickCard}>
      <div>
        <Image
          className={Style.cardImage}
          src={imageUrl}
          alt={name}
          height={150}
          width={150}
          object-fit='scale-down'
        />
      </div>
      <div className={Style.containerContent}>
        <div className={Style.containerValue}>
          <p className={Style.cardValue}>$ {price}</p>
          <span className={Style.badgeDelivery}>
            <BsTruck />
          </span>
        </div>
        <div className={Style.cardDescription}>
          <p>{description}</p>
        </div>
      </div>
      <div className={Style.cardCity}>
        <p>{city}</p>
      </div>
    </div>
  );
}

export { Card };

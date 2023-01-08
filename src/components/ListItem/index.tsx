import { Card } from '@/components/Card';
import Style from './listeItem.module.scss';

type LiteItem = {
  items: Card[];
};

function ListItem() {
  return (
    <div className={Style.conteinerList}>
      {/* {items.map((card) => (
        <Card key={card.id} {...card} />
      ))} */}

      <Card
        imageUrl='/images/iphone-image.png'
        price={9.121}
        name='iphone'
        description='Sedsssssss ut perspiciatis unde omnis iste na'
        city='Ceara'
      />
      <Card
        imageUrl='/images/iphone-image.png'
        price={9.121}
        name='iphone'
        description='Sedaaaaaa ut perspiciatis unde omnis iste na'
        city='Ceara'
      />
      <Card
        imageUrl='/images/iphone-image.png'
        price={9.121}
        name='iphone'
        description='Sed ut perspiciatis unde omnis iste na'
        city='Ceara'
      />
      <Card
        imageUrl='/images/iphone-image.png'
        price={9.121}
        name='iphone'
        description='Sedvvvv ut perspiciatis unde omnis iste na'
        city='Ceara'
      />
    </div>
  );
}

export { ListItem };

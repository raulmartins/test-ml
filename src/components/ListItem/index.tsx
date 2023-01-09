import { Card } from '@/components/Card';
import { ItemIntoList } from '@/interfaces/Front';
import Style from './listeItem.module.scss';

type Props = {
  list: ItemIntoList[];
};

const ListItem: React.FC<Props> = ({ list }) => {
  return (
    <div id='list-result' className={Style.conteinerList}>
      {list.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export { ListItem };

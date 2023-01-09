import { Card } from '@/components/Card';
import { ItemIntoList } from '@/interfaces/Front';
import Styles from './styles.module.scss';

type Props = {
  list: ItemIntoList[];
};

const ListItem: React.FC<Props> = ({ list }) => {
  return (
    <div id='list-result' className={Styles.conteinerList}>
      {list.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export { ListItem };

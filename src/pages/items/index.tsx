import { GetServerSideProps } from 'next';
import { Seo } from '@/components/SEO';
import { Main } from '@/components/Main';
import { ListItem } from '@/components/ListItem';
import { ItemListDTO } from '@/interfaces/Front';
import { getItemsList } from '@/services/getItemsList';

type Props = {
  listItem: ItemListDTO;
};

const Items: React.FC<Props> = ({ listItem }) => {
  const { items } = listItem;

  return (
    <Seo title='Search items' description='page search items'>
      <Main>
        <ListItem list={items} />
      </Main>
    </Seo>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { search },
  } = context;

  const listItem = await getItemsList(search as string);

  return {
    redirect: !listItem && {
      permanent: false,
      destination: '/404',
    },
    props: {
      listItem,
    },
  };
};
export default Items;

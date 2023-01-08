import { Body } from '@/components/Body';
import { ItemDetails } from '@/components/ItemDetails';
import { Header } from '@/components/Header';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Seo } from '@/components/SEO';
import { ItemDTO } from '@/interfaces/Front/item';
import { GetServerSideProps } from 'next';
import { getItemById } from '@/services/getItemById';

type Props = {
  itemDetails: ItemDTO;
};

const Item: React.FC<Props> = ({ itemDetails }) => {
  return (
    <Seo title='Item details' description='Page show item details'>
      <Header />
      <Body>
        <Breadcrumb items={['Home', 'Produtos', 'Categoria']} />
        <ItemDetails itemDetails={itemDetails} />
      </Body>
    </Seo>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const id = params?.id as string;
  const itemDetails = await getItemById(id);

  return {
    props: {
      itemDetails,
    },
  };
};

export default Item;

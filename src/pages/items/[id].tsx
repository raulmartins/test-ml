import { Body } from '@/components/Body';
import { ItemDetails } from '@/components/ItemDetails';
import { Seo } from '@/components/SEO';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ItemDTO } from '@/interfaces/Front/item';
import { GetServerSideProps } from 'next';
import { getItemById } from '@/services/getItemById';

type Props = {
  itemDetails: ItemDTO;
};

const Item: React.FC<Props> = ({ itemDetails }) => {
  const { category } = itemDetails;

  return (
    <Seo title='Item details' description='Page show item details'>
      <Body>
        <Breadcrumb categories={category} />
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
    redirect: !itemDetails && {
      permanent: false,
      destination: '/404',
    },
    props: {
      itemDetails,
    },
  };
};

export default Item;

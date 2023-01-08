import { Seo } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Main } from '@/components/Main';
import { ListItem } from '@/components/ListItem';

function Items() {
  return (
    <Seo title='Search items' description='page search items'>
      <Header />
      <Breadcrumb items={['Home', 'Produtos', 'Categoria']} />
      <Main>
        <ListItem />
      </Main>
    </Seo>
  );
}
export default Items;

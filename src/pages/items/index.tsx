import { Seo } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { ListItem } from '@/components/ListItem';

function Items() {
  return (
    <Seo title='Search items' description='page search items'>
      <Header />
      <Main>
        <ListItem />
      </Main>
    </Seo>
  );
}
export default Items;

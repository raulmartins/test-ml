import { Header } from '@/components/Header';
import { Seo } from '@/components/SEO';

export default function Home() {
  return (
    <>
      <Seo title='Homa page' description='page search for item'>
        <Header />
      </Seo>
    </>
  );
}

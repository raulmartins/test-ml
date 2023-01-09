import '../../styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

import { DefaultSeoProps } from 'next-seo';
const title = 'Seach items -  test from mercado livre';
const description = 'Seach items -  test from mercado livre';
const config: DefaultSeoProps = {
  title,
  description,
  canonical: process.env.NEXT_PUBLIC_APLICATION_URL,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'teste-mercado-livre',
    title,
    description,
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;

import { DefaultSeoProps } from 'next-seo';
const title = 'Descontaço janeiro 2023 no Mercado Livre Brasil';
const description =
  'Encontre o que esta buscando em Descontaco janeiro 2023. Todo o que você necessita está em Mercado Libre.';
const site = process.env.VERCEL_URL;
const config: DefaultSeoProps = {
  title,
  description,
  canonical: process.env.NEXT_PUBLIC_APLICATION_URL,
  openGraph: {
    type: site,
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_APLICATION_URL,
    siteName: 'teste-mercado-livre',
    title,
    description,
  },
  twitter: {
    handle: '@handle',
    site,
    cardType: 'summary_large_image',
  },
};

export default config;

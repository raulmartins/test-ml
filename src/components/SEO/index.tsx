import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const Seo: React.FC<Props> = ({ title, description, children }) => {
  const { asPath } = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APLICATION_URL}${asPath}`;
  return (
    <div data-testid='seo'>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, url }}
        additionalLinkTags={[
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'icon',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
          {
            rel: 'icon',
            sizes: '16x16',
            href: '/favicon-16x16.png',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        ]}
      />

      {children}
    </div>
  );
};

export { Seo };

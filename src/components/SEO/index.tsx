import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

type Seo = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function Seo({ title, description, children }: Seo) {
  const { asPath } = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APLICATION_URL}${asPath}`;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, url }}
      />

      {children}
    </>
  );
}

export { Seo };

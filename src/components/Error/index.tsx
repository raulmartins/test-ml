import Image from 'next/image';
import { Body } from '../Body';

import Styles from './styles.module.scss';

type Props = {
  image?: {
    blurDataUrl?: string;
    height: number;
    src: string;
    width: number;
  };
};

const Error: React.FC<Props> = ({ image }) => {
  return (
    <Body>
      <div data-testid='error' className={Styles.container}>
        <h1>Não há anúncios que correspondem à sua busca</h1>
        {image && (
          <Image
            data-testid='error-image'
            src={image?.src}
            width={70}
            height={70}
            alt='página de erro'
          />
        )}
      </div>
    </Body>
  );
};

export { Error };

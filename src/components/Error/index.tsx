import Image from 'next/image';
import { Body } from '../Body';

import Styles from './styles.module.scss';

const Error: React.FC = () => {
  return (
    <Body>
      <div data-testid='error' className={Styles.container}>
        <h1>Não há anúncios que correspondem à sua busca</h1>

        <Image
          data-testid='error-image'
          src='/images/lupav2.png'
          width={70}
          height={70}
          alt='página de erro'
        />
      </div>
    </Body>
  );
};

export { Error };
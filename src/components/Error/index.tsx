import Image from 'next/image';
import { Body } from '../Body';

import Styles from './styles.module.scss';

const Error: React.FC = () => {
  return (
    <Body>
      <div className={Styles.container}>
        <h1>Nenhum item encontrado</h1>
        <Image
          src='/images/404.png'
          width={500}
          height={500}
          alt='página de erro'
        />
      </div>
    </Body>
  );
};

export { Error };

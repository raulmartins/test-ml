import Image from 'next/image';
import Link from 'next/link';
import { SearchBar } from '../SearchBar';

import Styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header data-testid='header' className={Styles.header}>
      <div className={Styles.container}>
        <Link href='/items'>
          <Image
            data-testid='icon-header'
            src='/images/logo-v2.png'
            width={48}
            height={48}
            alt='imagem celebrando a parceria com aperto de mãos'
          />
        </Link>
        <div className={Styles.wrapperSearchBar}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export { Header };

import Image from 'next/image';
import { SearchBar } from '../SearchBar';

import Style from './search.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={Style.header}>
      <div className={Style.container}>
        <Image
          src='/images/logo-v2.png'
          width={48}
          height={48}
          alt='imagem celebrando a parceria com aperto de mãos'
        />
        <div className={Style.wrapperSearchBar}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}


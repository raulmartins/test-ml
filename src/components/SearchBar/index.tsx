import { useRouter } from 'next/router';
import { FormEvent, useCallback, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Styles from './styles.module.scss';

export const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    router.push(`/items?search=${inputRef.current?.value}`);
  }, []);

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type='search'
        placeholder='Pesquisar'
        aria-label='Pesquisar itens de compra'
        className={Styles.input}
      />
      <button type='submit' className={Styles.button}>
        <AiOutlineSearch size={32} color='#474537' />
      </button>
    </form>
  );
};

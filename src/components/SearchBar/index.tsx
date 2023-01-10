import { useRouter } from 'next/router';
import { FormEvent, useCallback, useRef, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Styles from './styles.module.scss';

export const SearchBar: React.FC = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    // setValue(inputRef.current?.value as string);
    router.push(`/items?search=${inputRef.current?.value}`);
  }, []);

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <input
        data-testid='search-bar'
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

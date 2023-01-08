import { FormEvent, useCallback, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Style from './styles.module.scss';

export const SearchBar: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        console.log(inputRef.current?.value)
    }, [])

  return (
      <form className={Style.form} onSubmit={handleSubmit}>
        <input
            ref={inputRef}
            type='search'
            placeholder='Pesquisar'
            aria-label='Pesquisar itens de compra'
            className={Style.input}
        />
        <button type='submit' className={Style.button}>
          <AiOutlineSearch size={32} color='#474537' />
        </button>
      </form>
  );
}
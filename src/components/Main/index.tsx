import React from 'react';
import Styles from './styles.module.scss';

type Prop = {
  children: React.ReactNode;
};

function Main({ children }: Prop) {
  return (
    <main data-testid='main' className={Styles.container}>
      {children}
    </main>
  );
}
export { Main };

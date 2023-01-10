import React from 'react';
import Styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <main data-testid='main' className={Styles.container}>
      {children}
    </main>
  );
};
export { Main };

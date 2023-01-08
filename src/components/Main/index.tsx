import React from 'react';
import Style from './main.module.scss';
type Prop = {
  children: React.ReactNode;
};

function Main({ children }: Prop) {
  return <main className={Style.container}>{children}</main>;
}
export { Main };

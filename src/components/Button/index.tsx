import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import Styles from './styles.module.scss';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  const classStyle = clsx(Styles.button, className);

  return (
    <button data-testid='button' className={classStyle} {...props}>
      {children}
    </button>
  );
};

export { Button };

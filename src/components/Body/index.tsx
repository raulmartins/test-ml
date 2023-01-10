import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import Styles from './styles.module.scss';

const Body: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid='body'
      className={clsx(Styles.container, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Body };

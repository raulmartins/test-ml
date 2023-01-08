import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import Styles from './styles.module.scss';

export const Body: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
    return (
        <div className={clsx(Styles.container, className)} {...props}>
            {children}
        </div>
    )
}
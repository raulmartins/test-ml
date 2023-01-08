import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import Styles from './styles.module.scss';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children,...props }) => {
    const classStyle = clsx(Styles.button, className);

    return (
        <button className={classStyle} {...props}>
            {children}
        </button>
    )
}
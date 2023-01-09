import Styles from './styles.module.scss';

type Props = {
  price: {
    currency: string;
    amount: number;
    decimal: number;
  };
};

export const Price: React.FC<Props> = ({ price }) => {
  const { amount, currency, decimal } = price;
  const parsedDecimal = String(decimal || 0).padEnd(2, '0');

  return (
    <span className={Styles.price}>
      <span className={Styles.currency}>{currency}</span>
      <span className={Styles.amount}>{amount}</span>
      <span className={Styles.decimal}>{parsedDecimal}</span>
    </span>
  );
};

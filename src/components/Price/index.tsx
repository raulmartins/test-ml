import Styles from './styles.module.scss';

type Props = {
  price: {
    currency: string;
    amount: number;
    decimal: number;
  };
};

const Price: React.FC<Props> = ({ price }) => {
  const { amount, currency, decimal } = price;
  const parsedDecimal = String(decimal || 0).padEnd(2, '0');

  return (
    <span data-testid='price' className={Styles.price}>
      <span data-testid='currency' className={Styles.currency}>
        {currency}
      </span>
      <span data-testid='amount' className={Styles.amount}>
        {amount}
      </span>
      <span data-testid='decimal' className={Styles.decimal}>
        {parsedDecimal}
      </span>
    </span>
  );
};

export { Price };

import { Price } from '@/components/Price';
import { render } from '@testing-library/react';
import React from 'react';

const mockPrice = {
  currency: '$',
  amount: 122,
  decimal: 31,
};

describe('Test component Price', () => {
  it('should test Price to be render', () => {
    const { getByTestId } = render(<Price price={mockPrice} />);
    const priceElement = getByTestId('price');
    const currencyElement = getByTestId('currency');
    const amountElement = getByTestId('amount');
    const decimalElement = getByTestId('decimal');

    expect(priceElement).toBeTruthy;
    expect(currencyElement).toContainHTML('$');
    expect(amountElement).toContainHTML('122');
    expect(decimalElement).toContainHTML('31');
  });
});

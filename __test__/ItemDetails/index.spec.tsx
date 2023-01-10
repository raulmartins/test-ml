import { render } from '@testing-library/react';
import { ItemDetails } from '@/components/ItemDetails';

const mockItemDetails = {
  id: '123',
  title: 'card title',
  picture: '#',
  condition: 'condition',
  free_shipping: true,
  sold_quantity: 12,
  description: 'card deescription',
  category: ['categoria1', 'categoria2', 'categoria3'],
  city: 'capital do ceará',
  price: {
    currency: '$',
    amount: 1,
    decimal: 2,
  },
};

describe('Test Component Item Details', () => {
  it('should test Item Details be render', () => {
    const { getByTestId } = render(
      <ItemDetails itemDetails={mockItemDetails} />
    );
    const itemDetailsElement = getByTestId('item-details');

    expect(itemDetailsElement).toBeTruthy();
  });
});

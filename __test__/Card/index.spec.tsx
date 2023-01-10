import { render } from '@testing-library/react';
import { Card } from '@/components/Card';

const mockCard = {
  id: '123',
  title: 'card title',
  picture: '#',
  condition: 'condition',
  free_shipping: true,
  category: ['categoria1', 'categoria2', 'categoria3'],
  city: 'capital do ceará',
  price: {
    currency: '$',
    amount: 1,
    decimal: 2,
  },
};

describe('Test Component Card', () => {
  it('should test card be render', () => {
    const { getByTestId } = render(<Card item={mockCard} />);
    const buttoElement = getByTestId('card');

    expect(buttoElement).toBeTruthy();
  });
});

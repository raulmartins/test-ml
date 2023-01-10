import { render } from '@testing-library/react';
import { ListItem } from '@/components/ListItem';

const mockListItem = [
  {
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
  },
];

describe('Test Component Liste Item', () => {
  it('should test list item to be render', () => {
    const { getByTestId } = render(<ListItem list={mockListItem} />);
    const listItemElement = getByTestId('list-item');
    const cardItemElement = getByTestId('card');

    expect(listItemElement).toContainElement(cardItemElement);
  });
});

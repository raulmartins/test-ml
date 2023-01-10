import { render } from '@testing-library/react';
import { Header } from '@/components/Header';

jest.mock('next/router', () => require('next-router-mock'));

describe('Test Component Header', () => {
  it('should test header be render', () => {
    const { getByTestId } = render(<Header />);
    const headerElement = getByTestId('header');
    const iconImageElement = getByTestId('icon-header');
    const inputSearchElement = getByTestId('search-bar');

    expect(headerElement).toBeTruthy();
    expect(headerElement).toContainElement(iconImageElement);
    expect(headerElement).toContainElement(inputSearchElement);
  });
});

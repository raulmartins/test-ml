import { SearchBar } from '@/components/SearchBar';
import { render } from '@testing-library/react';
import React from 'react';
jest.mock('next/router', () => require('next-router-mock'));

describe('Test component Search-bar', () => {
  it('should test searchbar to be render', () => {
    const { getByTestId } = render(<SearchBar />);
    const searchElement = getByTestId('search-bar');

    expect(searchElement).toBeTruthy;
  });
});

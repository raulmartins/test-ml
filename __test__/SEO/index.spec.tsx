import { Seo } from '@/components/SEO';
import { render } from '@testing-library/react';
import React from 'react';
jest.mock('next/router', () => require('next-router-mock'));

describe('Test component SEO', () => {
  it('should test SEO to be render', () => {
    const { getByTestId } = render(
      <Seo title={'teste'} description={'teste'} children={<div></div>} />
    );

    const seoElement = getByTestId('seo');

    expect(seoElement).toBeTruthy;
  });
});

import { render } from '@testing-library/react';
import { Breadcrumb } from '@/components/Breadcrumb';

describe('Test Component BreadCrumb', () => {
  it('should test breadcrumb to be rende with list categories', () => {
    const categories = ['Primeiro', 'Segundo', 'Terceiro'];
    const listLength = categories.length;

    const { getByTestId } = render(<Breadcrumb categories={categories} />);
    const breadcrumbElement = getByTestId('breadcrumb');

    const componentLi = breadcrumbElement.getElementsByTagName('li');

    expect(componentLi).toHaveLength(listLength);
  });
});

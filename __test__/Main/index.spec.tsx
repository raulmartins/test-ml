import { Main } from '@/components/Main';
import { render } from '@testing-library/react';

describe('Test component Main', () => {
  it('should test Main to be render', () => {
    const { getByTestId } = render(<Main children={<div></div>} />);
    const mainElement = getByTestId('main');

    expect(mainElement).toHaveClass('container');
    expect(mainElement).toBeTruthy;
  });
});

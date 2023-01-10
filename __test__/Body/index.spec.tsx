import { Body } from '@/components/Body';
import { render } from '@testing-library/react';

describe('Test component', () => {
  it('should test Body to be render', () => {
    const { getByTestId } = render(<Body />);
    const bodyElement = getByTestId('body');
    const div = document.createElement('div');
    bodyElement.appendChild(div);

    expect(bodyElement).toHaveClass('container');
    expect(bodyElement).toContainElement(div);
  });
});

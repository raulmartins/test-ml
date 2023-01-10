import { render } from '@testing-library/react';
import { Button } from '@/components/Button';

describe('Test Component Button', () => {
  it('should test button be render', () => {
    const { getByTestId } = render(<Button />);
    const buttoElement = getByTestId('button');

    expect(buttoElement).toBeTruthy();
  });
});

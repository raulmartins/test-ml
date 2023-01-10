import { render } from '@testing-library/react';
import { Error } from '@/components/Error';

describe('Test Component Error', () => {
  it('should test error be render', () => {
    const { getByTestId } = render(<Error />);
    const erroElement = getByTestId('error');
    const imageElement = getByTestId('error-image');

    expect(erroElement).toBeTruthy();
    expect(erroElement).toHaveTextContent(
      /Não há anúncios que correspondem à sua busca/
    );
    expect(erroElement).toContainElement(imageElement);
  });
});

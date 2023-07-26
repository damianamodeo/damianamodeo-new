import { render } from '@testing-library/react';

import Screen from './Screen';

describe('Screen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Screen />);
    expect(baseElement).toBeTruthy();
  });
});

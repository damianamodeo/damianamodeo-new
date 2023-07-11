import { render } from '@testing-library/react';

import Disclosure from './Disclosure';

describe('Disclosure', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Disclosure />);
    expect(baseElement).toBeTruthy();
  });
});

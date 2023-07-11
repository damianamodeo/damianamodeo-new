import { render } from '@testing-library/react';

import Longpress from './Longpress';

describe('Longpress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Longpress />);
    expect(baseElement).toBeTruthy();
  });
});

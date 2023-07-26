import { render } from '@testing-library/react';

import Nivo from './Header';

describe('Nivo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nivo />);
    expect(baseElement).toBeTruthy();
  });
});

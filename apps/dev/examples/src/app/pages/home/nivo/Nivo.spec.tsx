import { render } from '@testing-library/react';

import Nivo from './Nivo';

describe('Nivo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nivo />);
    expect(baseElement).toBeTruthy();
  });
});

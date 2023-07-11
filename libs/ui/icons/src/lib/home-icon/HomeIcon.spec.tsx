import { render } from '@testing-library/react';

import HomeIcon from './HomeIcon';

describe('HomeIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeIcon />);
    expect(baseElement).toBeTruthy();
  });
});

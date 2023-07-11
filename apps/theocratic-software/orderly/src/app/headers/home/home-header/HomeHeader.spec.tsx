import { render } from '@testing-library/react';

import HomeHeader from './HomeHeader';

describe('HomeHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeHeader />);
    expect(baseElement).toBeTruthy();
  });
});

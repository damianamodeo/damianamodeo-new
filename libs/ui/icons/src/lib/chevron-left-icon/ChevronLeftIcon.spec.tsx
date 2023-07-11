import { render } from '@testing-library/react';

import ChevronLeftIcon from './ChevronLeftIcon';

describe('ChevronLeftIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronLeftIcon />);
    expect(baseElement).toBeTruthy();
  });
});

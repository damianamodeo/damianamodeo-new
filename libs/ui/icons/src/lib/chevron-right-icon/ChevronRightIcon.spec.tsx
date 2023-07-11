import { render } from '@testing-library/react';

import ChevronRightIcon from './ChevronRightIcon';

describe('ChevronRightIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronRightIcon />);
    expect(baseElement).toBeTruthy();
  });
});

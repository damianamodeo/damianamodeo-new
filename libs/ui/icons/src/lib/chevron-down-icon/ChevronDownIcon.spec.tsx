import { render } from '@testing-library/react';

import ChevronDownIcon from './ChevronDownIcon';

describe('ChevronDownIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronDownIcon />);
    expect(baseElement).toBeTruthy();
  });
});

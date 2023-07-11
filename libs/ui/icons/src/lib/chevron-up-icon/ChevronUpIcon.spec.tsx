import { render } from '@testing-library/react';

import ChevronUpIcon from './ChevronUpIcon';

describe('ChevronUpIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChevronUpIcon />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ReactPdfDemo from './ReactPdfDemo';

describe('ReactPdfDemo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactPdfDemo />);
    expect(baseElement).toBeTruthy();
  });
});

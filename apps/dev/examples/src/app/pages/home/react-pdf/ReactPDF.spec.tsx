import { render } from '@testing-library/react';

import ReactPDF from './ReactPDF';

describe('ReactPDF', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactPDF />);
    expect(baseElement).toBeTruthy();
  });
});

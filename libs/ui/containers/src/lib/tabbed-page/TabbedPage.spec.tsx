import { render } from '@testing-library/react';

import TabbedPage from './TabbedPage';

describe('TabbedPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabbedPage />);
    expect(baseElement).toBeTruthy();
  });
});

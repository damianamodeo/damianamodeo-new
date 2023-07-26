import { render } from '@testing-library/react';

import ReactCharts from './ReactCharts';

describe('ReactCharts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCharts />);
    expect(baseElement).toBeTruthy();
  });
});

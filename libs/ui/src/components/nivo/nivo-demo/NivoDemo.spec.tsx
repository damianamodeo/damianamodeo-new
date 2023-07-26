import { render } from '@testing-library/react';

import NivoDemo from './NivoDemo';

describe('NivoDemo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NivoDemo />);
    expect(baseElement).toBeTruthy();
  });
});

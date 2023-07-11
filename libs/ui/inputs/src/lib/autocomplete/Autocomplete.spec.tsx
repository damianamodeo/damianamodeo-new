import { render } from '@testing-library/react';

import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Autocomplete />);
    expect(baseElement).toBeTruthy();
  });
});

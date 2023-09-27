import { render } from '@testing-library/react';

import LocalStorage from './LocalStorageHeader';

describe('LocalStorage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LocalStorage />);
    expect(baseElement).toBeTruthy();
  });
});

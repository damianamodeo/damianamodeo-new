import { render } from '@testing-library/react';

import Dexie from './Dexie';

describe('Dexie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dexie />);
    expect(baseElement).toBeTruthy();
  });
});

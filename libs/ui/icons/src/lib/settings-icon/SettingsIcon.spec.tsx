import { render } from '@testing-library/react';

import SettingsIcon from './SettingsIcon';

describe('SettingsIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsIcon />);
    expect(baseElement).toBeTruthy();
  });
});

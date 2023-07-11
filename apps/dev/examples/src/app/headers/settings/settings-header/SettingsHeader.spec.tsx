import { render } from '@testing-library/react';

import SettingsHeader from './SettingsHeader';

describe('SettingsHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsHeader />);
    expect(baseElement).toBeTruthy();
  });
});

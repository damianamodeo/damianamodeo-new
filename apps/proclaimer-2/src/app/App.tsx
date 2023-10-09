import { HomeIcon, Screen, SettingsIcon } from '@ui';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Record from '../pages/Record';
import Return from '../pages/Return';
import Write from '../pages/Write';
import HomeHeader from '../pages/HomeHeader';
import RecordHeader from '../pages/RecordHeader';
import ReturnHeader from '../pages/ReturnHeader';
import WriteHeader from '../pages/WriteHeader';
import SettingsHeader from '../pages/SettingsHeader';

const content = [
  {
    section: 'Home',
    Icon: HomeIcon,
    pages: {
      Home: {
        Page: Home,
        Header: HomeHeader,
      },
      Record: {
        Page: Record,
        Header: RecordHeader,
      },
      Return: {
        Page: Return,
        Header: ReturnHeader,
      },
      Write: {
        Page: Write,
        Header: WriteHeader,
      },
    },
  },
  {
    section: 'Settings',
    Icon: SettingsIcon,
    pages: {
      Settings: {
        Page: Settings,
        Header: SettingsHeader,
      },
    },
  },
];

export function App() {
  return <Screen content={content}></Screen>;
}

export default App;

if (import.meta.vitest) {
  // add tests related to your file here
  // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

  const { it, expect, beforeEach } = import.meta.vitest;
  let render: any;

  beforeEach(async () => {
    render = (await import('@testing-library/react')).render;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome proclaimer-2/gi)).toBeTruthy();
  });
}

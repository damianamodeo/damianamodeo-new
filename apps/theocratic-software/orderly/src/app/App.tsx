/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeIcon, SettingsIcon, Screen } from '@ui';
import { lazy, useEffect } from 'react';
import Home from './pages/home/home/Home';
import HomeHeader from './pages/home/home/HomeHeader';
import Settings from './pages/settings/settings/Settings';
import SettingsHeader from './pages/settings/settings/SettingsHeader';

const pages = [
  {
    startPage: 'Home',
    Icon: HomeIcon,
    subpages: {
      Home: {
        Content: Home,
        Header: HomeHeader,
      },
    },
  },
  {
    startPage: 'Settings',
    Icon: SettingsIcon,
    subpages: {
      Settings: {
        Content: Settings,
        Header: SettingsHeader,
      },
      makeCongregation: {
        Content: lazy(()=> import('./pages/settings/make-congregation/MakeCongregation')),
        Header: lazy(()=> import('./pages/settings/make-congregation/MakeCongregationHeader')),
      },
    },
  },
];

export function App() {
  useEffect(() => {
    const handleBackButton = () => {
      window.history.pushState({}, '');
    };
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return <Screen pages={pages}></Screen>;
}

export default App;

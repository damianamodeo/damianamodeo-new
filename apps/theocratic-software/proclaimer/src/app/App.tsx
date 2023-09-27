import { lazy, useEffect } from 'react';
import Home from './pages/home/home/Home';
import HomeHeader from './pages/home/home/HomeHeader';
import Settings from './pages/settings/settings/Settings';
import SettingsHeader from './pages/settings/settings/SettingsHeader';
import { HomeIcon, SettingsIcon, Screen } from '@ui2';

const pages = [
  // Home Pages
  {
    startPage: 'Home',
    Icon: HomeIcon,
    subpages: {
      Home: { Content: Home, Header: HomeHeader },
      Record: {
        Content: lazy(() => import('./pages/home/record/Record')),
        Header: lazy(() => import('./pages/home/record/RecordHeader')),
      },
      Return: {
        Content: lazy(() => import('./pages/home/return/Return')),
        Header: lazy(() => import('./pages/home/return/ReturnHeader')),
      },
      Write: {
        Content: lazy(() => import('./pages/home/write/Write')),
        Header: lazy(() => import('./pages/home/write/WriteHeader')),
      },
    },
  },
  // Settings Pages
  {
    startPage: 'Settings',
    Icon: SettingsIcon,
    subpages: {
      Settings: { Content: Settings, Header: SettingsHeader },
      Appearance: {
        Content: lazy(() => import('./pages/settings/appearance/Appearance')),
        Header: lazy(
          () => import('./pages/settings/appearance/AppearanceHeader')
        ),
      },
      Details: {
        Content: lazy(() => import('./pages/settings/details/Details')),
        Header: lazy(() => import('./pages/settings/details/DetailsHeader')),
      },
    },
  },
];

function App() {
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

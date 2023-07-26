/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeIcon, SettingsIcon, Screen } from '@ui';
import { lazy, useEffect } from 'react';
import Home from './pages/home/home/Home';
import HomeHeader from './pages/home/home/Header';
import Settings from './pages/settings/settings/Settings';
import SettingsHeader from './pages/settings/settings/Header';

const pages = [
  {
    startPage: 'Home',
    Icon: HomeIcon,
    subpages: {
      Home: {
        Content: Home,
        Header: HomeHeader,
      },
      'Local Storage': {
        Content: lazy(() => import('./pages/home/local-storage/LocalStorage')),
        Header: lazy(() => import('./pages/home/local-storage/Header')),
      },
      'React PDF': {
        Content: lazy(() => import('./pages/home/react-pdf/ReactPDF')),
        Header: lazy(() => import('./pages/home/react-pdf/Header')),
      },
      'React Charts': {
        Content: lazy(() => import('./pages/home/react-charts/ReactCharts')),
        Header: lazy(() => import('./pages/home/react-charts/Header')),
      },
      Nivo: {
        Content: lazy(() => import('./pages/home/nivo/Nivo')),
        Header: lazy(() => import('./pages/home/nivo/Header')),
      },

      Dexie: {
        Content: lazy(() => import('./pages/home/dexie/Dexie')),
        Header: lazy(() => import('./pages/home/dexie/Header')),
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

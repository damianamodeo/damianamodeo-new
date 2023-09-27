/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeIcon, SettingsIcon, Screen2 } from '@ui2';
import { lazy, useEffect } from 'react';
import Home from './pages/home/home/Home';
import HomeHeader from './pages/home/home/HomeHeader';
import Settings from './pages/settings/settings/Settings';
import SettingsHeader from './pages/settings/settings/SettingsHeader';

const content = [
  {
    section: 'Home',
    Icon: HomeIcon,
    pages: {
      Home: {
        Page: Home,
        Header: HomeHeader,
      },
      LocalStorage: {
        Page: lazy(() => import('./pages/home/local-storage/LocalStorage')),
        Header: lazy(
          () => import('./pages/home/local-storage/LocalStorageHeader')
        ),
      },
      Icons: {
        Page: lazy(() => import('./pages/home/icons/Icons')),
        Header: lazy(() => import('./pages/home/icons/IconsHeader')),
      },
        // {
        //   name: 'React PDF',
        //   Page: lazy(() => import('./pages/home/react-pdf/ReactPDF')),
        //   Header: lazy(() => import('./pages/home/react-pdf/Header')),
        // },
        // {
        //   name: 'React Charts',
        //   Page: lazy(() => import('./pages/home/react-charts/ReactCharts')),
        //   Header: lazy(() => import('./pages/home/react-charts/Header')),
        // },
        // {
        //   name: 'Nivo',
        //   Page: lazy(() => import('./pages/home/nivo/Nivo')),
        //   Header: lazy(() => import('./pages/home/nivo/Header')),
        // },

        // {
        //   name: 'Dexie',
        //   Page: lazy(() => import('./pages/home/dexie/Dexie')),
        //   Header: lazy(() => import('./pages/home/dexie/Header')),
        // },
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
  useEffect(() => {
    const handleBackButton = () => {
      window.history.pushState({}, '');
    };
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return <Screen2 content={content}></Screen2>;
}

export default App;

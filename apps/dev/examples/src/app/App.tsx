/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeIcon, SettingsIcon, Screen } from '@ui';
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
      'Local Storage': {
        Page: lazy(() => import('./pages/home/local-storage/LocalStorage')),
        Header: lazy(
          () => import('./pages/home/local-storage/LocalStorageHeader')
        ),
      },
      Icons: {
        Page: lazy(() => import('./pages/home/icons/Icons')),
        Header: lazy(() => import('./pages/home/icons/IconsHeader')),
      },
      'Refactor Firestore': {
        Page: lazy(
          () => import('./pages/home/refactor-firestore/RefactorFirestore')
        ),
        Header: lazy(
          () =>
            import('./pages/home/refactor-firestore/RefactorFirestoreHeader')
        ),
      },
      Inputs: {
        Page: lazy(() => import('./pages/home/inputs/Inputs')),
        Header: lazy(() => import('./pages/home/inputs/InputsHeader')),
      },
      Record: {
        Page: lazy(() => import('./pages/home/record/Record')),
        Header: lazy(() => import('./pages/home/record/RecordHeader')),
      },
      Firebase: {
        Page: lazy(() => import('./pages/home/firebase/Firebase')),
        Header: lazy(() => import('./pages/home/firebase/FirebaseHeader')),
      },
      Mapbox: {
        Page: lazy(() => import('./pages/home/mapbox/Mapbox')),
        Header: lazy(() => import('./pages/home/mapbox/MapboxHeader')),
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

  return <Screen content={content}></Screen>;
}

export default App;

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider, appInit } from '@services';

appInit()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider storageKey="theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);

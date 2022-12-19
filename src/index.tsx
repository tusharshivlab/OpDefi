import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GasSettingsContextProvider } from './features/GasSetting/context/GasSettingsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GasSettingsContextProvider>
      <App />
    </GasSettingsContextProvider>
  </React.StrictMode>
);


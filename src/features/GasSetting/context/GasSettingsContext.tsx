import { createContext, ReactNode, useContext, useState } from 'react';
import {
  IGasSettingContext,
  initialGasSettings,
} from '../types/gasSettings.types';

const GasSettingsContext =
  createContext<IGasSettingContext>(initialGasSettings);

const GasSettingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [gasSettings, setGasSettings] = useState(
    initialGasSettings?.gasSettings
  );
  return (
    <GasSettingsContext.Provider value={{ gasSettings, setGasSettings }}>
      {children}
    </GasSettingsContext.Provider>
  );
};
function useGasSettings() {
  const context = useContext(GasSettingsContext);
  if (context === undefined) {
    throw new Error(
      'Please provide Provider for Gas Setting context on top of the tree.'
    );
  }
  return context;
}

export { GasSettingsContextProvider, useGasSettings };

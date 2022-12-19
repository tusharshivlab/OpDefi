import ButtonSecondary from './components/Button/ButtonSecondary';
import GasSettingsModal from './features/GasSetting/container';
import { useGasSettings } from './features/GasSetting/context/GasSettingsContext';
import { IGasSettingContext } from './features/GasSetting/types/gasSettings.types';

function App() {
  const { setGasSettings } = useGasSettings();
  return (
    <div>
      <ButtonSecondary
        onClick={() =>
          setGasSettings((prevSetting: IGasSettingContext['gasSettings']) => ({
            ...prevSetting,
            isOpen: true,
          }))
        }
      >
        Gas{' '}
      </ButtonSecondary>
      <GasSettingsModal />
    </div>
  );
}

export default App;

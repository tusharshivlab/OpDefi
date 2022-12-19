import Modal from '../../../components/Modal';
import GasSettingContent from '../component/GasSettingContent';
import { useGasSettings } from '../context/GasSettingsContext';
import { IGasSettingContext } from '../types/gasSettings.types';

const GasSettingsModal = () => {
  const { gasSettings, setGasSettings } = useGasSettings();
  return (
    <>
      <Modal
        isOpenProp={gasSettings?.isOpen}
        onCloseModal={() =>
          setGasSettings((prevSetting: IGasSettingContext['gasSettings']) => ({
            ...prevSetting,
            isOpen: false,
          }))
        }
        contentExtraClass='max-w-sm max-h-screen-min'
        contentPaddingClass='p-5'
        renderContent={() => <GasSettingContent />}
        renderTrigger={() => null}
        modalTitle='Gas Settings'
      />
    </>
  );
};
export default GasSettingsModal;

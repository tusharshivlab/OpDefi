import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import FormInputs from '../../../components/FormInputs/FormInputs';
import Input from '../../../components/Input/Input';
import Label from '../../../components/Label/Label';
import { RadioGroup } from '@headlessui/react';
import CustomSwitch from '../../../components/Switch/CustomSwitch';
import { useGasSettings } from '../context/GasSettingsContext';
import { IGasSettingContext } from '../types/gasSettings.types';
import { Fragment, useEffect, useState } from 'react';
import { InformationIcon, LockIcon } from '../../../components/Icons';
const GasSettingContent = () => {
  const { gasSettings, setGasSettings } = useGasSettings();
  const [ethUSDPrice, setEthUsdPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const fetchCurrentUSDPricePerETH = await fetch(
        'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=3P3QVMMYDBCW6CQC2IB2XV95QD1YDYBJQM'
      );
      const fetchedPrice = await fetchCurrentUSDPricePerETH?.json();
      setEthUsdPrice(fetchedPrice?.result?.ethusd);
    })();
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setGasSettings((prevSetting: IGasSettingContext['gasSettings']) => ({
      ...prevSetting,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className='flex justify-center pb-5 text-gray-900'>
        <Label className='text-3xl'>
          ~ {gasSettings?.maxFee * gasSettings?.gasLimit}
        </Label>
      </div>
      <div className='pb-4 text-gray-900'>
        <Label className='text-lg'>Max Fee:</Label>
        <Label className='text-base font-medium pl-1'>
          {' '}
          {gasSettings?.maxFee * gasSettings?.gasLimit}
        </Label>
      </div>

      <div className='mx-auto w-full max-w-md pb-12'>
        <RadioGroup
          value={gasSettings?.currentPlan}
          onChange={(
            selected: IGasSettingContext['gasSettings']['currentPlan']
          ) =>
            setGasSettings(
              (prevSettings: IGasSettingContext['gasSettings']) => ({
                ...prevSettings,
                currentPlan: selected,
              })
            )
          }
        >
          <Label className='text-gray-900 text-lg'>Priority</Label>
          <div className='ml-5 space-x-10 flex mt-3'>
            {['Low', 'Medium', 'High'].map((priority) => (
              <RadioGroup.Option key={priority} value={priority} as={Fragment}>
                {({ checked }) => (
                  <RadioGroup.Label
                    className={`cursor-pointer p-[12px] w-[100px] text-center
                    ${
                      checked
                        ? 'bg-blue-500 text-white rounded-full '
                        : 'bg-gray-200 text-gray-900  rounded-full'
                    }`}
                  >
                    {priority}
                  </RadioGroup.Label>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className='flex justify-between pb-4'>
        <Label className='text-lg text-gray-900'>Advanced Options</Label>
        <CustomSwitch
          checked={gasSettings?.advanceEnable}
          handleOnChange={() =>
            setGasSettings(
              (prevSettings: IGasSettingContext['gasSettings']) => ({
                ...prevSettings,
                advanceEnable: !prevSettings?.advanceEnable,
              })
            )
          }
        />
      </div>

      {gasSettings?.advanceEnable === true && (
        <div>
          <FormInputs
            className='text-gray-900'
            label='Max priority fee (GWEI)'
            icon={InformationIcon()}
          >
            <Input
              name='maxPriorityFee'
              placeholder='Enter Max Priority Fee'
              isEndAdorment={true}
              displayEndAdorment={`$${(
                ethUSDPrice * gasSettings?.maxPriorityFee
              ).toFixed(4)}`}
              onChange={handleChange}
              value={gasSettings?.maxPriorityFee}
            />
          </FormInputs>

          <FormInputs
            className='text-gray-900'
            label='Max fee (GWEI)'
            icon={InformationIcon()}
          >
            <Input
              name='maxFee'
              placeholder='Enter Max Fee'
              isEndAdorment={true}
              displayEndAdorment={`$${(
                ethUSDPrice * gasSettings?.maxFee
              ).toFixed(4)}`}
              onChange={handleChange}
              value={gasSettings?.maxFee}
            />
          </FormInputs>

          <FormInputs
            className='text-gray-900'
            label='Gas Limit'
            icon={LockIcon()}
          >
            <Input
              name='gasLimit'
              type='url'
              placeholder='Enter Gas Limit'
              isEndAdorment={true}
              displayEndAdorment='Edit'
              onChange={handleChange}
              value={gasSettings?.gasLimit}
            />
          </FormInputs>
        </div>
      )}
      <ButtonPrimary
        className={`flex-2 mt-3 justify-self-center ${
          true
            ? 'w-full bg-blue-600 hover:bg-blue-600 hover:bg-opacity-90 cursor-pointer '
            : 'w-full bg-gray-400 hover:bg-gray-400 cursor-not-allowed'
        }`}
      >
        Save
      </ButtonPrimary>
    </div>
  );
};

export default GasSettingContent;

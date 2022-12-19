import { Dispatch, SetStateAction } from 'react';

export interface IGasSettingContext {
  gasSettings: {
    isOpen: boolean;
    advanceEnable: boolean;
    currentPlan: 'High' | 'Low' | 'Medium';
    maxPriorityFee: number;
    maxFee: number;
    gasLimit: number;
  };
  setGasSettings: Dispatch<
    SetStateAction<{
      isOpen: boolean;
      advanceEnable: boolean;
      currentPlan: 'High' | 'Low' | 'Medium';
      maxPriorityFee: number;
      maxFee: number;
      gasLimit: number;
    }>
  >;
}

export const initialGasSettings: IGasSettingContext = {
  gasSettings: {
    isOpen: false,
    advanceEnable: false,
    currentPlan: 'High',
    maxPriorityFee: 0,
    maxFee: 0,
    gasLimit: 0,
  },
  setGasSettings: () => {},
};

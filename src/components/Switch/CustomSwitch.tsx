import { Switch } from '@headlessui/react';

const CustomSwitch = ({
  checked,
  handleOnChange,
}: {
  checked: boolean;
  handleOnChange: () => void;
}) => {
  return (
    <Switch
      checked={checked}
      onChange={handleOnChange}
      className={`${
        checked
          ? 'bg-blue-600 dark:bg-slate-300'
          : 'bg-gray-300 dark:bg-slate-600'
      } relative inline-flex h-[26px] w-[50px] 
              shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 
              ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span
        aria-hidden='true'
        className={`${
          checked ? 'translate-x-6 bg-white' : 'translate-x-0 bg-white dark'
        } pointer-events-none inline-block h-[20px] w-[20px] mr-2 transform rounded-full
     bg-white  shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};
export default CustomSwitch;

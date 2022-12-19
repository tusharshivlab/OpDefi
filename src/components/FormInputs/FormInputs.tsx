import { FC, ReactNode } from 'react';
import Label from '../Label/Label';

export interface FormInputsProps {
  className?: string;
  label?: string;
  desc?: ReactNode | string;
  optional?: string;
  children?: ReactNode | undefined;
  icon?: ReactNode;
}

const FormInputs: FC<FormInputsProps> = ({
  children,
  className = '',
  label,
  desc,
  optional,
  icon,
}) => {
  return (
    <div className={`py-2 ${className}`}>
      {label && (
        <div className='flex justify-start'>
          {icon && icon}
          <Label>{label}</Label>
        </div>
      )}
      {optional && (
        <span className='p-1 font-thin text-sm'>{`(${optional})`} </span>
      )}
      <div className='mt-1.5'>{children}</div>
      {desc && (
        <div className='block mt-3 text-xs text-neutral-500 dark:text-neutral-400 '>
          {desc}
        </div>
      )}
    </div>
  );
};

export default FormInputs;

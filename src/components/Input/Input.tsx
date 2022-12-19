import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeClass?: string;
  fontClass?: string;
  rounded?: string;
  isEndAdorment?: boolean;
  displayEndAdorment?: string | number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      sizeClass = 'h-11 px-4 py-3',
      fontClass = 'text-sm font-normal',
      rounded = 'rounded-2xl',
      type = 'text',
      isEndAdorment,
      displayEndAdorment,
      ...args
    },
    ref
  ) => {
    return (
      <>
        { isEndAdorment && (
          <div className='text-gray-500 pointer-events-none absolute h-6 w-auto right-7 mt-2'>
            {displayEndAdorment}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          autoComplete='off'
          className={`block w-full bg-gray-200  ring-0
        focus:bg-white focus:border-none  disabled:bg-neutral-200 ${rounded} ${fontClass} ${sizeClass} ${className}`}
          {...args}
        />
      </>
    );
  }
);

export default Input;

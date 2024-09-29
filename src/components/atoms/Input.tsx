'use client';

import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { classNames } from '@/lib/utils';
import { IconEye } from '@/assets/icons';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassname?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  mr?: number; // Margin right
  icon?: React.ReactNode; // Adding icon prop
  error?: boolean; // Adding error prop to indicate if the input has an error
}

const applyMargin = (mr?: number): string => (mr ? `mr-${mr}` : '');

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, containerClassname, type, mr, icon, error, checked, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPasswordType = type === 'password';
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const getInputType = () => {
      if (type === 'password') {
        return showPassword ? 'text' : 'password';
      }
      return type;
    };
    const marginClass = applyMargin(mr);
    return (
      <div
        className={twMerge(
          'relative flex items-center',
          marginClass,
          containerClassname
        )}
      >
        {icon && (
          <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3">
            {icon}
          </div>
        )}
        {type === 'checkbox' ? (
          <input
            type="checkbox"
            checked={checked}
            className={classNames('size-5', className)}
            {...props}
            ref={ref}
          />
        ) : (
          <input
            type={getInputType()}
            className={classNames(
              'h-10 w-full rounded-md border border-base-content/0 bg-base-100 px-2 leading-10 text-base-content outline-none',
              'hover:border-base-content/10 hover:bg-base-300/60 ',
              'focus:border focus:border-base-content/10 focus:bg-base-300/60',
              error && 'ring-error focus:ring-error',
              icon && 'pl-10',
              className
            )}
            ref={ref}
            {...props}
          />
        )}
        {isPasswordType && (
          <div
            className="absolute inset-y-0 right-0 z-10 flex cursor-pointer items-center pr-3"
            onClick={toggleShowPassword}
          >
            <IconEye
              slash={showPassword}
              className="h-4 w-4 text-base-content"
            />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

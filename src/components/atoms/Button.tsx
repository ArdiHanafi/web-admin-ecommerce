import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IconSpinner } from '@/assets/icons';

interface IButtonBase extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
  isLoading?: boolean;
  children: React.ReactNode;
}

const baseStyle = {
  default: '',
  primary:
    'flex items-center justify-center bg-primary font-medium text-primary-content hover:bg-primary/70 disabled:bg-primary/70  ',
  secondary:
    'flex items-center justify-center border-2 border-primary bg-secondary bg-transparent font-medium text-primary hover:bg-primary hover:text-primary-content disabled:hover:text-primary disabled:hover:bg-transparent disabled:opacity-70',
};

export const Button: React.FC<IButtonBase> = ({
  className,
  variant = 'default',
  children,
  disabled = false,
  isLoading = false,
  ...props
}) => {
  const classname: string = twMerge(
    baseStyle[variant],
    'rounded disabled:cursor-not-allowed',
    className
  );

  return (
    <button className={classname} disabled={isLoading || disabled} {...props}>
      {isLoading ? (
        <IconSpinner className="h-5 w-5 animate-spin text-inherit" />
      ) : (
        children
      )}
    </button>
  );
};

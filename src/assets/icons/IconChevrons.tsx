import React from 'react';
import { IIcon } from '@/types';
import { twMerge } from 'tailwind-merge';

export const IconChevrons: React.FC<IIcon> = ({ className, ...props }) => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={twMerge('h-6 w-6 fill-current', className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 233.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192zm-384 192l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 41.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
      />
    </svg>
  );
};

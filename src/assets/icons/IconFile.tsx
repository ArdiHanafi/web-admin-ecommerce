import { IIcon } from '@/types';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const IconFile: React.FC<IIcon> = ({ className, ...props }) => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className={twMerge('h-6 w-6 fill-current', className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"
      />
    </svg>
  );
};

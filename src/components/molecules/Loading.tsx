import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IconSpinner } from '@/assets/icons';

export const Loading: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={twMerge(
        'flex h-full w-full items-center justify-center text-base-content/80',
        className
      )}
    >
      <IconSpinner className="h-6 w-6 animate-spin" />
    </div>
  );
};

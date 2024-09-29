import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IIcon } from '@/types';

type IIconAngle = IIcon & { direction?: 'left' | 'right' | 'top' | 'bottom' };

export const IconAngle: React.FC<IIconAngle> = ({
  className,
  direction = 'left',
  ...props
}) => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      style={{
        // eslint-disable-next-line no-nested-ternary
        transform: `rotate(${direction === 'bottom' ? '-90' : direction === 'right' ? '180' : direction === 'top' ? '90' : '0'}deg)`,
      }}
      className={twMerge('svg-inline--fa fill-current', className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      />
    </svg>
  );
};

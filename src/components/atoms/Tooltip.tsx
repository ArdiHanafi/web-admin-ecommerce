import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TooltipProps = {
  className?: string;
  content: string;
  children: ReactNode;
};

export const Tooltip: React.FC<TooltipProps> = ({
  className,
  content,
  children,
}) => {
  return (
    <div className={twMerge('tooltip', className)} data-tip={content}>
      {children}
    </div>
  );
};

import React from 'react';
import {
  Select as SelectHdls,
  SelectProps as SelectPropsHdls,
} from '@headlessui/react';
import { IconDropdown } from '@/assets/icons';
import { twMerge } from 'tailwind-merge';

export type SelectOptions = {
  value: string;
  label: string;
};

type SelectProps = SelectPropsHdls & {
  options: SelectOptions[];
  conClassName?: string;
};

export const Select: React.FC<SelectProps> = ({
  value,
  options,
  className,
  conClassName,
  onChange,
  ...props
}) => {
  return (
    <div className={twMerge('relative w-36 overflow-hidden', conClassName)}>
      <SelectHdls
        value={value}
        onChange={onChange}
        className={twMerge(
          'w-full appearance-none rounded-md border-none bg-base-100 px-3 py-1.5 text-sm/6 text-base-content',
          className as string
        )}
        {...props}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </SelectHdls>
      <IconDropdown
        className="group pointer-events-none absolute right-2.5 top-3 size-3 text-base-content/80"
        aria-hidden="true"
      />
    </div>
  );
};

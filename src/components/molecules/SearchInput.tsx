import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IconSearch } from '@/assets/icons';

interface ISearchInput {
  onChange: (value: string) => void;
  value: string;
  className?: string;
  placeholder?: string;
}

export const SearchInput: React.FC<ISearchInput> = ({
  value,
  className,
  placeholder = 'Search...',
  onChange,
}) => {
  return (
    <div
      className={twMerge(
        'flex h-11 w-full min-w-20 items-center rounded-lg border border-base-content/5 bg-base-100 px-3 focus-within:border-base-content/20',
        className
      )}
    >
      <IconSearch className="mr-3 h-4 text-base-content" />
      <input
        className="w-ful h-full w-full bg-transparent text-base-content outline-none focus:outline-none"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

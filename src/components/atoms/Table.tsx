import React, { TableHTMLAttributes, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface THeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  trClass?: string;
}

export const Table: React.FC<TableHTMLAttributes<HTMLTableElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <table
      className={twMerge(
        'w-full border-collapse border border-base-content/50 text-sm',
        className
      )}
      {...props}
    >
      {children}
    </table>
  );
};

export const THead: React.FC<THeadProps> = ({ children, ...props }) => {
  return <thead {...props}>{children}</thead>;
};

export const Th: React.FC<HTMLAttributes<HTMLTableHeaderCellElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <th
      className={twMerge(
        'border border-base-content/10 bg-base-content/5 px-4 py-2 text-sm font-normal text-base-content/80',
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
};

export const TBody: React.FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  children,
  ...props
}) => {
  return <tbody {...props}>{children}</tbody>;
};

export const Td: React.FC<HTMLAttributes<HTMLTableCellElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <td
      className={twMerge(
        'h-auto border border-base-content/10 px-4 py-2 text-center text-sm font-normal text-base-content/80',
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export const Tr: React.FC<HTMLAttributes<HTMLTableRowElement>> = ({
  children,
  ...props
}) => {
  return <tr {...props}>{children}</tr>;
};

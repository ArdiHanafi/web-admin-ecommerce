import React from 'react';
import clsx from 'clsx';
import { IconAngle } from '@/assets/icons';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  // Calculate the total number of pages
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  // Determine the range of pages to display
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(pageCount, currentPage + 1);

  if (currentPage === 1) {
    startPage = 1;
    endPage = Math.min(pageCount, 3);
  } else if (currentPage === pageCount) {
    startPage = Math.max(1, pageCount - 2);
    endPage = pageCount;
  }

  return (
    <div className="mt-4 flex items-center justify-center space-x-2 p-4">
      <button
        disabled={currentPage === 1}
        className={clsx(
          'rounded-full px-4 py-2 font-semibold transition-colors duration-300 ease-in-out',
          { 'cursor-not-allowed opacity-50': currentPage === 1 },
          {
            'text-base-content hover:bg-primary/60 hover:text-primary-content':
              currentPage !== 1,
          }
        )}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <IconAngle direction="left" />
      </button>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((number) => (
        <button
          key={number}
          className={clsx(
            'rounded-full px-4 py-2 font-semibold transition-colors duration-300 ease-in-out',
            { 'bg-primary text-primary-content': number === currentPage },
            {
              'text-base-content hover:bg-primary/60 hover:text-primary-content':
                number !== currentPage,
            }
          )}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        disabled={currentPage === pageCount}
        className={clsx(
          'rounded-full px-4 py-2 font-semibold transition-colors duration-300 ease-in-out',
          { 'cursor-not-allowed opacity-50': currentPage === pageCount },
          {
            'text-base-content hover:bg-primary/60 hover:text-primary-content':
              currentPage !== pageCount,
          }
        )}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <IconAngle direction="right" />
      </button>
    </div>
  );
};

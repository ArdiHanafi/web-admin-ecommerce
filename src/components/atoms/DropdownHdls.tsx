'use client';

import React, { useContext } from 'react';
import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';
import { AnchorProps } from '@/types';
import { twMerge } from 'tailwind-merge';
import { ThemeContext } from '@/contexts/ThemeContext';

interface IDropdownHdls {
  children: React.ReactNode;
  buttonClass?: string;
  buttonChild: any;
  itemsClass?: string;
  anchor?: AnchorProps;
}

export const DropdownHdls: React.FC<IDropdownHdls> = ({
  buttonClass,
  buttonChild,
  itemsClass,
  children,
  anchor = 'bottom end',
}) => {
  const { theme } = useContext(ThemeContext);

  const menuButtonClass: string = twMerge(
    'inline-flex items-center gap-2 rounded-lg text-sm/6 font-semibold focus:outline-none data-[focus]:outline-none outline-none',
    buttonClass
  );

  const menuItemsClass: string = twMerge(
    'z-30 w-40 origin-top-right rounded-xl border border-base-content/10 bg-base-200 py-2 shadow-lg focus:outline-none outline-none',
    itemsClass
  );

  return (
    <Menu>
      <MenuButton className={menuButtonClass}>{buttonChild}</MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor={anchor}
          className={menuItemsClass}
          data-theme={theme}
          as="div"
        >
          {children}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

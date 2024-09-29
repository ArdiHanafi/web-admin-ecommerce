'use client';

import { useLayout } from '@/contexts/LayoutContext';
import { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { themes } from '@/lib/const';
import { ThemeContext } from '@/contexts/ThemeContext';
import clsx from 'clsx';
import { classNames } from '@/lib/utils';
import {
  IconBar3,
  IconCheck,
  IconDropdown,
  IconNotif,
  IconPalette,
} from '@/assets/icons';
import { useCurrentUser } from '@/hooks';

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: 'login' },
];

export function Header() {
  const { sidebarOpen, setSidebarOpen } = useLayout();
  const { theme, changeTheme } = useContext(ThemeContext);
  const userSession = useCurrentUser();

  return (
    <div
      className={classNames(
        'sticky top-0 z-40',
        sidebarOpen ? 'lg:pl-72' : 'lg:pl-14'
      )}
    >
      <div className="flex h-16 shrink-0 items-center gap-x-4 border-b border-base-content/10 bg-base-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <IconBar3 className="size-5" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
            <Menu as="div" className="relative">
              <Menu.Button className="-m-1.5 flex items-center rounded-md p-1.5 hover:bg-base-100">
                <span className="sr-only">Theme</span>
                <IconPalette className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2.5 max-h-96 w-40 origin-top-right overflow-y-auto rounded-md border border-base-content/10 bg-base-200 py-2 shadow-lg outline-none ring-1 ring-gray-900/5 focus:outline-none">
                  {themes.map((item) => (
                    <Menu.Item key={item}>
                      <span
                        data-theme={item}
                        onClick={() => changeTheme(item)}
                        className="flex cursor-pointer items-center bg-base-100 px-3 py-1 text-sm font-medium leading-6 text-base-content hover:bg-base-100/80"
                      >
                        <IconCheck
                          className={clsx('mr-2 size-4 text-success', {
                            'opacity-100': item === theme,
                            'opacity-0': item !== theme,
                          })}
                          aria-hidden="true"
                        />
                        {item}
                        <div className="ms-auto h-4 w-1 rounded-sm bg-primary" />
                        <div className="ms-1 h-4 w-1 rounded-sm bg-secondary" />
                        <div className="ms-1 h-4 w-1 rounded-sm bg-accent" />
                      </span>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-base-content hover:text-base-content"
            >
              <span className="sr-only">View notifications</span>
              <IconNotif className="size-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            {/* <div
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-base-content"
              aria-hidden="true"
            /> */}

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full bg-base-200"
                  src={
                    userSession?.image ??
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  }
                  width={50}
                  height={50}
                  alt=""
                />
                <span className="hidden lg:flex lg:items-center">
                  <span
                    className="ml-4 text-sm font-semibold leading-6 text-base-content"
                    aria-hidden="true"
                  >
                    {userSession?.name ?? userSession?.email}
                  </span>
                  <IconDropdown
                    className="ml-2 size-4 text-base-content"
                    aria-hidden="true"
                  />
                </span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md border border-base-content/10 bg-base-200 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          onClick={
                            item.name === 'Sign out'
                              ? () => {
                                  // logout();
                                }
                              : () => {}
                          }
                          className={classNames(
                            active
                              ? 'bg-primary text-primary-content'
                              : 'bg-base-200 text-base-content hover:bg-primary hover:text-primary-content',
                            'block px-3 py-1 text-sm leading-6'
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

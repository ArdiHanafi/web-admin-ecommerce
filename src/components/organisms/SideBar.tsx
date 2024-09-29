/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { Fragment, ReactNode } from 'react';
import { useLayout } from '@/contexts/LayoutContext';
import { Dialog, Disclosure, MenuItem, Transition } from '@headlessui/react';
import Link from 'next/link';
import clsx from 'clsx';
import {
  IconChevrons,
  IconCrown,
  IconDropdown,
  IconFile,
  IconFutbol,
  IconGear,
  IconHandShake,
  IconHome,
  IconLogout,
  IconMarketing,
  IconMoney,
  IconUser,
} from '@assets/icons';
import { usePathname } from 'next/navigation';
import { DropdownHdls } from '../atoms/DropdownHdls';

type NavItem = {
  name: string;
  href?: string;
  current?: boolean;
  icon?: ReactNode;
};

type NavigationItems = NavItem & {
  children?: NavItem[];
};

const navigation: NavigationItems[] = [
  { name: 'Dashboard', href: '/', icon: <IconHome className="size-5" /> },
  {
    name: 'User Management',
    icon: <IconUser className="size-5" />,
    children: [
      { name: 'Users', href: '/users' },
      { name: 'Documents (KYC)', href: '/documents' },
    ],
  },
  {
    name: 'Reporting',
    icon: <IconFile className="size-5" />,
    children: [
      { name: 'Financial Report', href: '/financial-report' },
      { name: 'Betting Activity', href: '/betting-activity' },
      { name: 'Balance Overviews', href: '/balance-overviews' },
    ],
  },
  {
    name: 'Payments',
    icon: <IconMoney className="size-5" />,
    children: [
      { name: 'Deposit Log', href: '/deposit-log' },
      { name: 'Withdrawals', href: '/withdrawals' },
    ],
  },
  {
    name: 'Loyalty & Bonuses',
    icon: <IconCrown className="size-5" />,
    children: [
      { name: 'Bonus Management', href: '/bonus-management' },
      { name: 'Loyalty Config', href: '/loyalty' },
    ],
  },
  {
    name: 'Affiliates',
    icon: <IconHandShake className="size-5" />,
    children: [
      { name: 'Affiliate Management', href: '/affiliate-management' },
      { name: 'Affiliate Settings', href: '/affiliate-settings' },
    ],
  },
  {
    name: 'Sportsbook',
    icon: <IconFutbol className="size-5" />,
    children: [{ name: 'Sportsbook Management', href: '/sportsbook' }],
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export function SideBar() {
  const { sidebarOpen, setSidebarOpen } = useLayout();
  const pathname = usePathname();

  return (
    <>
      {/* <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"> */}
      <div
        className={clsx(
          'hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col',
          { 'lg:w-72': sidebarOpen },
          { 'lg:w-14': !sidebarOpen }
        )}
      >
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div
          className={classNames(
            'flex grow flex-col gap-y-5 overflow-y-auto border-r border-base-content/10 bg-base-200',
            sidebarOpen ? 'px-6' : 'px-2'
          )}
        >
          <div className="flex h-16 shrink-0 items-center">
            <p
              className={classNames(
                'mt-2 flex w-full items-center text-2xl font-bold text-base-content',
                sidebarOpen ? 'justify-between' : 'justify-center'
              )}
            >
              {sidebarOpen ? (
                <>
                  <Link href="/">Admin</Link>{' '}
                  <IconChevrons
                    className="size-3.5 rotate-180 cursor-pointer"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  />
                </>
              ) : (
                <IconChevrons
                  className="size-4 cursor-pointer"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                />
              )}
            </p>
          </div>
          <nav className="flex flex-1 flex-col">
            {sidebarOpen ? (
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => {
                      const current = pathname === (item.href as string);
                      const isDefaultOpen = !!item?.children?.find(
                        (cl) => cl.href === pathname
                      );
                      return (
                        <li key={item.name}>
                          {!item.children ? (
                            <Link
                              href={item.href as string}
                              className={classNames(
                                current
                                  ? 'bg-primary text-primary-content '
                                  : 'bg-primary/[0.03] text-base-content hover:bg-primary hover:text-primary-content',
                                'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-xs font-semibold leading-6'
                              )}
                            >
                              {item.icon}
                              {item.name}
                            </Link>
                          ) : (
                            <Disclosure as="div" defaultOpen={isDefaultOpen}>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className={classNames(
                                      current
                                        ? 'bg-primary text-primary-content '
                                        : 'bg-primary/[0.03] text-base-content hover:bg-primary hover:text-primary-content',
                                      'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-xs font-semibold leading-6'
                                    )}
                                  >
                                    {item.icon}
                                    {item.name}
                                    <IconDropdown
                                      className={classNames(
                                        open ? 'rotate-180' : '',
                                        'ms-auto size-3.5 shrink-0'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Disclosure.Button>
                                  <Transition
                                    enter="transition duration-200 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-200 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                  >
                                    <Disclosure.Panel
                                      as="ul"
                                      className="mt-1 px-2"
                                    >
                                      {item.children &&
                                        item.children.map((subItem) => {
                                          const subCurrent =
                                            pathname ===
                                            (subItem.href as string);
                                          return (
                                            <li key={subItem.name}>
                                              <Link
                                                href={subItem.href as string}
                                                className={classNames(
                                                  subCurrent
                                                    ? 'bg-primary font-semibold text-primary-content'
                                                    : 'text-base-content hover:bg-primary hover:text-primary-content',
                                                  'block rounded-md py-2 pl-9 pr-2 text-xs leading-6'
                                                )}
                                              >
                                                {subItem.name}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="login"
                    // onClick={() => logout()}
                    className="flex items-center gap-x-4 px-6 py-3 text-xs font-semibold leading-6 text-base-content hover:bg-base-100"
                  >
                    <span aria-hidden="true">Log Out</span>
                  </a>
                </li>
              </ul>
            ) : (
              <>
                {navigation.map((nav, index) => {
                  const currentNav = pathname === (nav.href as string);
                  if (nav.children) {
                    return (
                      <DropdownHdls
                        key={index}
                        anchor="right start"
                        itemsClass="z-50 left-14"
                        buttonClass={classNames(
                          'my-1 flex size-9 items-center justify-center rounded-lg',
                          nav.children.find((cl) => cl.href === pathname)
                            ? 'bg-primary/80 text-primary-content/80'
                            : 'text-base-content hover:bg-primary/80 hover:text-primary-content/80'
                        )}
                        buttonChild={nav.icon}
                      >
                        {nav.children.map((navChild) => {
                          const currentNavChild =
                            pathname === (navChild.href as string);
                          return (
                            <MenuItem key={navChild.name}>
                              <Link
                                href={navChild.href as string}
                                className={classNames(
                                  currentNavChild
                                    ? 'bg-primary text-primary-content'
                                    : 'bg-base-200 text-base-content hover:bg-primary hover:text-primary-content',
                                  'flex w-full flex-col px-3 py-1 text-left text-sm leading-6'
                                )}
                              >
                                {navChild.name}
                              </Link>
                            </MenuItem>
                          );
                        })}
                      </DropdownHdls>
                    );
                  }
                  return (
                    <Link
                      href={nav.href as string}
                      key={index}
                      className={classNames(
                        currentNav
                          ? 'bg-primary text-primary-content'
                          : 'bg-base-200 text-base-content hover:bg-primary hover:text-primary-content',
                        'my-1 flex size-9 flex-col items-center justify-center rounded-lg'
                      )}
                    >
                      {nav.icon ?? ''}
                    </Link>
                  );
                })}
                <a
                  href="login"
                  // onClick={() => logout()}
                  className="my-1 mb-4 mt-auto flex size-9 flex-col items-center justify-center rounded-lg bg-base-200 text-base-content hover:bg-primary hover:text-primary-content"
                >
                  <IconLogout className="size-5" />
                </a>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

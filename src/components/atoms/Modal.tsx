'use client';

import { Fragment, ReactNode, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { IconClose } from '@/assets/icons';
import { ThemeContext } from '@/contexts/ThemeContext';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  containerStyle?: 'default' | 'large';
  closeBackdrop?: boolean;
}

const baseStyle = {
  default: 'max-w-lg px-6 pb-9 pt-6',
  large: 'max-w-2xl px-4 pb-4 pt-2',
};

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  containerStyle = 'default',
  closeBackdrop = true,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={closeBackdrop ? onClose : () => {}}
      >
        <div
          className="fixed inset-0 bg-base-300/60 blur-8px"
          data-theme={theme}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={clsx(
                      'w-full transform items-center overflow-hidden rounded-2xl border border-base-content/5 bg-base-200 text-center align-middle transition-all',
                      baseStyle[containerStyle]
                    )}
                  >
                    {closeBackdrop && (
                      <button
                        className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-transparent hover:bg-base-300"
                        onClick={onClose}
                      >
                        <IconClose className="h-5 w-5 opacity-50" />
                      </button>
                    )}
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold text-base-content"
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    {description && (
                      <p className="mb-8 mt-3 text-sm font-medium text-base-content/80">
                        {description}
                      </p>
                    )}
                    <div className="flex flex-col items-start">{children}</div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

'use client';

import React, { Suspense, useContext, useState } from 'react';
import { Loading, ModalConfirm, SearchInput } from '@/components/molecules';
import {
  Pagination,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tooltip,
  Tr,
} from '@/components/atoms';
import { DropdownHdls } from '@/components/atoms/DropdownHdls';
import { IconEdit, IconSort } from '@/assets/icons';
import { MenuItem } from '@headlessui/react';
import { QueryParams, UserStatus } from '@/types';
import dummyData from '@/data/dummy/withdraw.json';
import { classNames, toastSuccess } from '@/lib/utils';
import { ThemeContext } from '@/contexts/ThemeContext';

type ModalData = {
  id: string;
  username?: string;
  status?: UserStatus | '';
  turnover?: number;
  deposits?: number;
  withdrawals?: number;
  currentBalance?: number;
};

const Page: React.FC = () => {
  const withdrawData = dummyData.responseObject;
  const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>({
    id: '',
    username: '',
    status: '',
    turnover: 0,
    deposits: 0,
    withdrawals: 0,
    currentBalance: 0,
  });
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 1,
    pageSize: 10,
    status: 'NEW',
    search: '',
    sortBy: 'createdAt',
    sortOrder: '',
  });
  const sortList = [
    { title: 'Username: Asc', value: 'username:asc' },
    { title: 'Username: Desc', value: 'username:desc' },
    { title: 'Status: Asc', value: 'status:asc' },
    { title: 'Status: Desc', value: 'status:desc' },
  ];

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const formattedDate = date.toISOString().slice(0, 10);
    const formattedTime = date.toTimeString().slice(0, 8);
    return (
      <>
        {formattedDate} <br /> {formattedTime}
      </>
    );
  };
  const resetModalData = () => {
    setTimeout(() => {
      setModalData({
        id: '',
        username: '',
        status: '',
        turnover: 0,
        deposits: 0,
        withdrawals: 0,
        currentBalance: 0,
      });
    }, 200);
  };

  const dummyUserData = dummyData.responseObject.items.map((itm, index) => {
    return {
      ...itm,
      status: index > 3 ? 'INACTIVE' : 'ACTIVE',
      turnover: 0,
      deposits: 0,
      withdrawals: 0,
      currentBalance: 0,
    };
  });

  const { colors } = useContext(ThemeContext);

  return (
    <>
      <ModalConfirm
        isOpen={openModalConfirm}
        title="Change User Status"
        description={`Are you sure you want to change the user status for ${modalData.username} to ${modalData.status}?`}
        onClose={() => {
          setOpenModalConfirm(false);
          resetModalData();
        }}
        onCancel={() => {
          setOpenModalConfirm(false);
          resetModalData();
        }}
        onConfirm={() => {
          toastSuccess('Successfully change user status', {
            bg: colors.base100,
            text: colors.baseContent,
            border: colors.success,
          });
        }}
      />
      <Suspense fallback={<Loading />}>
        <h1 className="text-center text-2xl font-semibold tracking-wider text-base-content">
          USERS
        </h1>
        <div className="mt-6 flex w-full">
          <SearchInput
            value={queryParams.search as string}
            onChange={(value) =>
              setQueryParams({ ...queryParams, search: value })
            }
          />
          <DropdownHdls
            buttonClass="ml-2"
            buttonChild={
              <Tooltip content="Sort">
                <div className="flex h-11 w-11 items-center justify-center gap-2 rounded-lg border border-base-content/5 bg-base-100 tracking-wider text-base-content hover:bg-primary hover:text-primary-content">
                  <IconSort className="h-5 w-5" />
                </div>
              </Tooltip>
            }
          >
            {sortList.map((srt, index) => (
              <MenuItem key={index}>
                <button
                  onClick={async () => {
                    setQueryParams({
                      ...queryParams,
                      page: 1,
                      sortBy: srt.value,
                    });
                  }}
                  className={classNames(
                    queryParams.sortBy === srt.value
                      ? 'bg-primary text-primary-content'
                      : 'bg-base-200 text-base-content hover:bg-primary hover:text-primary-content',
                    'w-full px-3 py-1 text-left text-sm leading-6'
                  )}
                >
                  {srt.title}
                </button>
              </MenuItem>
            ))}
          </DropdownHdls>
        </div>
        <div className="mt-4 max-w-full overflow-x-auto">
          <Table className="min-w-[1373px]">
            <THead>
              <Tr>
                <Th>User ID</Th>
                <Th>Username (Email)</Th>
                <Th>GGR</Th>
                <Th>Deposits</Th>
                <Th>Withdrawals</Th>
                <Th>Current Balance</Th>
                <Th>Actions</Th>
              </Tr>
            </THead>
            <TBody>
              {dummyUserData.map((usr, index) => (
                <Tr key={index}>
                  <Td>
                    {formatDate(usr.createdAt)}
                    <br />
                    <span className="text-sm text-base-content/50">
                      User ID: {usr.id}
                    </span>
                  </Td>
                  <Td>
                    <div className="flex flex-col">
                      <span>{usr.Requester.name}</span>
                      <span>{usr.Requester.email}</span>
                    </div>
                  </Td>
                  <Td>{usr.turnover}</Td>
                  <Td>{usr.deposits}</Td>
                  <Td>{usr.withdrawals}</Td>
                  <Td>{usr.currentBalance}</Td>
                  <Td>
                    <Tooltip content="Edit">
                      <IconEdit
                        className="cursor-pointer"
                        onClick={() => setOpenModalConfirm(true)}
                      />
                    </Tooltip>
                  </Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </div>
        <Pagination
          currentPage={withdrawData.currentPage}
          setCurrentPage={(pg) => setQueryParams({ ...queryParams, page: pg })}
          itemsPerPage={withdrawData.pageSize}
          totalItems={withdrawData.totalItems}
        />
      </Suspense>
    </>
  );
};

export default Page;

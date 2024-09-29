'use client';

import React, { useEffect, useState } from 'react';
import { Button, Input, Modal } from '../atoms';

interface IModalRemark {
  isOpen: boolean;
  isLoading?: boolean;
  initRemark: string;
  onClose: () => void;
  onConfirm: (data: string) => void;
}

export const ModalRemark: React.FC<IModalRemark> = ({
  isOpen,
  initRemark,
  isLoading,
  onClose,
  onConfirm,
}) => {
  const [remarkValue, setRemarkValue] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setRemarkValue(initRemark);
    }
  }, [isOpen, initRemark]);

  return (
    <Modal title="Remark" isOpen={isOpen} onClose={onClose} description="">
      <div className="flex w-full flex-col items-center">
        <Input
          value={remarkValue}
          onChange={(e) => setRemarkValue(e.target.value)}
          containerClassname="w-full"
          className="mb-8 mt-6 w-full text-center"
        />
        <div className="grid w-full grid-cols-2 gap-4">
          <Button variant="secondary" className="h-9" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="h-9"
            variant="primary"
            isLoading={isLoading}
            onClick={() => onConfirm(remarkValue)}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

import React from 'react';
import { Button, Modal } from '../atoms';

interface IModalConfirm {
  title: string;
  isOpen: boolean;
  isLoading?: boolean;
  description: string;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ModalConfirm: React.FC<IModalConfirm> = ({
  title,
  isOpen,
  isLoading = false,
  description,
  onClose,
  onCancel,
  onConfirm,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  const handleClose = () => {
    onCancel();
    onClose();
  };

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      description={description}
    >
      <div className="flex w-full flex-col items-center">
        <div className="grid w-full grid-cols-2 gap-4">
          <Button variant="secondary" className="h-9" onClick={handleClose}>
            No
          </Button>
          <Button
            className="h-9"
            variant="primary"
            isLoading={isLoading}
            onClick={handleConfirm}
          >
            Yes
          </Button>
        </div>
      </div>
    </Modal>
  );
};

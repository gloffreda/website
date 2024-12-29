import React from 'react';

import { ConfirmationButton } from './Button';
import { Card } from './card';
import ModalBase from './ModalBase/ModalBase';
import { Label } from './Typography';

type TDecoderRemoveModalProps = {
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
  loading?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const BasicModalCard = ({
  onCancel,
  onConfirm,
  children,
  title,
  loading,
  confirmText,
  cancelText,
  isOpen,
  onClose,
}: TDecoderRemoveModalProps) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <Card.Root className='divide-y w-96'>
        <Card.Header.Root>
          <Label weight='bold' size='xl' text={title} />
        </Card.Header.Root>
        <Card.Body>{children}</Card.Body>
        <div className='relative w-full h-full mt-auto p-3 divide-y'>
          <ConfirmationButton
            confirm={{
              onClick: onConfirm,
              label: confirmText ?? 'CONFIRM',
              loading: loading,
            }}
            cancel={{ onClick: onCancel, loading: loading, label: cancelText ?? 'CANCEL' }}
          />
        </div>
      </Card.Root>
    </ModalBase>
  );
};

export default BasicModalCard;

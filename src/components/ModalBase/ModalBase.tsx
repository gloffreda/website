import React from 'react';

import { DEFAULT } from '../../themes/default';
import { WindowSize } from '../../utils/windowSize';
import { ConfirmationButton } from '../Button';
import { Card } from '../card';
import { Label, TLabelProps } from '../Typography';

import { ModalBaseStyle } from './ModalBaseStyle';

type TModalBaseProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function ModalBase({ isOpen, onClose, children }: TModalBaseProps) {
  if (!isOpen) return null;
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <ModalBaseStyle className='fixed inset-0 modal-outside' onClick={() => onClose()} />
          <div className='z-10 flex justify-center'>{children}</div>
        </div>
      )}
    </>
  );
}
type TModalAlertProps = {
  title?: TLabelProps;
  description?: TLabelProps;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};
export function ModalConfirmAlert({ title, description, isOpen, onCancel, onConfirm }: TModalAlertProps) {
  const isWeb = WindowSize(DEFAULT.screens.sm);
  return (
    <ModalBase isOpen={isOpen} onClose={onCancel}>
      <Card.Root className='w-11/12'>
        <Card.Header.Root>
          <Card.Header.Title text={'MODAL_CONFIRM_DEFAULT_TITLE'} breakLine {...title} />
        </Card.Header.Root>
        <Card.Body>
          <Label text={'MODAL_CONFIRM_DEFAULT_DESCRIPTION'} breakLine {...description} />
        </Card.Body>
        <Card.Footer>
          <ConfirmationButton
            className={isWeb ? '' : 'flex flex-col'}
            confirm={{
              label: 'CONFIRM',
              onClick: onConfirm,
            }}
            cancel={{
              onClick: onCancel,
              label: 'CANCEL',
              theme: 'light',
            }}
          />
        </Card.Footer>
      </Card.Root>
    </ModalBase>
  );
}

export default ModalBase;

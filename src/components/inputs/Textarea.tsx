import React from 'react';

import { Label, TLabelProps } from '../Typography';

import { StyledTextArea } from './styles';

type TTextareaProps = {
  label?: TLabelProps;
  input?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  placeholder?: string;
  isNamePlaceholder?: boolean;
};
export function Textarea({ label, input }: TTextareaProps) {
  return (
    <>
      {label && <Label weight='light' className='ms-3' {...label} />}
      <StyledTextArea {...input} />
    </>
  );
}

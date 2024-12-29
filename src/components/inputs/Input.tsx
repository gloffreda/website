import React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

import { Icon } from '../Icon';
import { Label, TLabelProps } from '../Typography';

import { StyledCheckboxInput, StyledInput } from './styles';

export type TInputProps = {
  label?: TLabelProps;
  input?: React.InputHTMLAttributes<HTMLInputElement>;
};

type TNumberInputProps = {
  label?: TLabelProps;
  input?: NumericFormatProps;
};

type TCheckboxInputProps = {
  label?: TLabelProps;
  input?: React.InputHTMLAttributes<HTMLInputElement>;
};

export function Input({ label, input = {} }: TInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputType = input.type === 'password' && showPassword ? 'text' : input.type;
  return (
    <>
      {label && <Label weight='light' className='ms-3' {...label} />}
      <div className='relative'>
        <StyledInput {...input} type={inputType} />
        {input.type === 'password' && (
          <Icon
            icon={showPassword ? 'LuEyeOf' : 'LuEye'}
            className='absolute right-3 top-3 cursor-pointer z-50'
            onClick={() => setShowPassword(prev => !prev)}
          />
        )}
      </div>
    </>
  );
}

export function NumberInput({ label, input = {} }: TNumberInputProps) {
  return (
    <>
      {label && <Label weight='light' {...label} />}
      <NumericFormat customInput={StyledInput} {...input} />
    </>
  );
}

export function CheckboxInput({ label, input = {} }: TCheckboxInputProps) {
  return (
    <>
      <div className='flex flex-row items-center'>
        <div style={{ height: '38px' }} className='flex items-center justify-center shrink-0'>
          <StyledCheckboxInput className='shrink-0' {...input} type='checkbox' />
        </div>
        {label && <Label weight='light' className='ms-2' {...label} />}
      </div>
    </>
  );
}

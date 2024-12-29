import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';
import { StyledInput } from './inputs/styles';
import { Loader } from './Loader';

type TSearchInputProps = {
  input?: React.InputHTMLAttributes<HTMLInputElement>;
  container?: { className: string };
  loading?: boolean;
};

export default function SearchInput({ input = {}, container, loading }: TSearchInputProps) {
  return (
    <div className={`relative flex items-center ${container?.className ?? ''}`}>
      <StyledSearchInput {...input} />
      {!loading && <Icon icon='LuSearch' size={'lg'} className='absolute right-2' />}
      {loading && (
        <div className='absolute right-2'>
          <Loader size={20} />
        </div>
      )}
    </div>
  );
}

const StyledSearchInput = styled(StyledInput)`
  padding-right: 2rem;
`;

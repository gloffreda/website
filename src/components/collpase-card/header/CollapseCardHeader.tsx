import { useContext } from 'react';
import styled from 'styled-components';

import { CardHeaderRoot } from '../../card/header/CardHeader';
import { CollapseCardContext } from '../CollapseCardRoot';

export function CollapseCardHeaderRoot({ children }: { children: React.ReactNode }) {
  const ctx = useContext(CollapseCardContext);
  return (
    <StyledCardHeaderRoot isOpen={ctx.isOpen} className='flex justify-between items-center'>
      {children}
    </StyledCardHeaderRoot>
  );
}

const StyledCardHeaderRoot = styled(CardHeaderRoot)<{ isOpen: boolean }>`
  border-bottom: solid 1px ${({ theme, isOpen }) => (isOpen ? theme.colors.light_gray : 'transparent')};
`;

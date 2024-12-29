import React from 'react';
import styled from 'styled-components';

type THeaderRootProps = {
  children: React.ReactNode;
  className?: string;
};
export default function HeaderRoot({ children, ...props }: THeaderRootProps) {
  return <StyledHeaderRoot {...props}>{children}</StyledHeaderRoot>;
}

const StyledHeaderRoot = styled.div`
  padding-top: ${({ theme }) => theme.spacings[3]};
  padding-right: ${({ theme }) => theme.spacings[3]};
  padding-bottom: ${({ theme }) => theme.spacings[3]};
  padding-left: ${({ theme }) => theme.spacings[3]};
  background-color: ${({ theme }) => theme.colors.bright_white};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bright_gray};
`;

import { UIEventHandler } from 'react';
import styled from 'styled-components';

import { TStyledHeaderItemProps } from '../header/TableHeaderItem';

type TTableBodyProps = {
  children: React.ReactNode;
  className?: string;
  scrollbarDisabled?: boolean;
  style?: React.CSSProperties;
  onScroll?: UIEventHandler<HTMLDivElement>;
} & TStyledHeaderItemProps;

export function TableBody({ children, scrollbarDisabled, style, ...props }: TTableBodyProps) {
  return (
    <StyledBody scrollbarDisabled={scrollbarDisabled} className='text-break' style={style} {...props}>
      {children}
    </StyledBody>
  );
}

const StyledBody = styled.div<{ scrollbarDisabled?: boolean }>`
  max-height: 100%;
  overflow-y: scroll;
  scrollbar-width: ${({ scrollbarDisabled }) => (scrollbarDisabled ? 'none' : 'thin')}; /* for Firefox */

  ::-webkit-scrollbar {
    /* for Chrome, Safari, and Opera */
    display: ${({ scrollbarDisabled }) => (scrollbarDisabled ? 'none' : null)};
  }

  -ms-overflow-style: ${({ scrollbarDisabled }) =>
    scrollbarDisabled ? 'none' : null}; /* for Internet Explorer, Edge */

  padding: ${({ theme }) => theme.spacings[2]};
`;

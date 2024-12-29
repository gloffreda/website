import styled, { css } from 'styled-components';

import { screens } from '../../../themes/default';
import { TSizes } from '../types';

export type TStyledHeaderItemProps = { span?: TSizes };

type TTableHeaderItemProps = {
  children: React.ReactNode;
  className?: string;
} & TStyledHeaderItemProps;

export function TableHeaderItem({ children, ...props }: TTableHeaderItemProps) {
  return (
    <StyledHeaderItem className='text-break px-3' {...props}>
      {children}
    </StyledHeaderItem>
  );
}

const StyledHeaderItem = styled.div<TStyledHeaderItemProps>`
  grid-column: ${({ span }) => `span ${span?.sm ?? 1} / span ${span?.sm ?? 1}`};
  /* padding: 0 ${({ theme }) => theme.spacings[4]}; */
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  :last-child {
    border-right: 0;
  }
  ${({ span }) =>
    screens.sm(css`
      grid-column: ${`span ${span?.sm ?? 1} / span ${span?.sm ?? 1}`};
    `)};
  ${({ span }) =>
    screens.md(css`
      grid-column: ${`span ${span?.md ?? span?.sm ?? 1} / span ${span?.md ?? span?.sm ?? 1}`};
    `)};
  ${({ span }) =>
    screens.lg(css`
      grid-column: ${`span ${span?.lg ?? span?.sm ?? 1} / span ${span?.lg ?? span?.sm ?? 1}`};
    `)};
  ${({ span }) =>
    screens.xl(css`
      grid-column: ${`span ${span?.xl ?? span?.sm ?? 1} / span ${span?.xl ?? span?.sm ?? 1}`};
    `)};
  ${({ span }) =>
    screens['2xl'](css`
      grid-column: ${`span ${span?.['2xl'] ?? span?.sm ?? 1} / span ${span?.['2xl'] ?? span?.sm ?? 1}`};
    `)};
`;

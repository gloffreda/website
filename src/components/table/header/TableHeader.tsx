import styled, { css } from 'styled-components';

import { screens } from '../../../themes/default';
import { TSizes } from '../types';

type TStyledHeaderProps = { cols?: TSizes };
type TTableHeaderProps = { children: React.ReactNode } & TStyledHeaderProps;

export function TableHeader({ children, ...props }: TTableHeaderProps) {
  return (
    <StyledHeader className='text-break' {...props}>
      {children}
    </StyledHeader>
  );
}
const StyledHeader = styled.div<TStyledHeaderProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols?.sm ?? 2}, minmax(0, 1fr))`};
  padding: 0 ${({ theme }) => theme.spacings[2]};
  gap: ${({ theme }) => theme.spacings[4]};
  z-index: 1;
  box-shadow: none;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  ${({ cols }) =>
    screens.sm(css`
      grid-template-columns: ${`repeat(${cols?.sm ?? 2}, minmax(0, 1fr))`};
    `)};
  ${({ cols }) =>
    screens.md(css`
      grid-template-columns: ${`repeat(${cols?.md ?? cols?.sm ?? 2}, minmax(0, 1fr))`};
    `)};
  ${({ cols }) =>
    screens.lg(css`
      grid-template-columns: ${`repeat(${cols?.lg ?? cols?.sm ?? 2}, minmax(0, 1fr))`};
    `)};
  ${({ cols }) =>
    screens.xl(css`
      grid-template-columns: ${`repeat(${cols?.xl ?? cols?.sm ?? 2}, minmax(0, 1fr))`};
    `)};
  ${({ cols }) =>
    screens['2xl'](css`
      grid-template-columns: ${`repeat(${cols?.['2xl'] ?? cols?.sm ?? 2}, minmax(0, 1fr))`};
    `)};
`;

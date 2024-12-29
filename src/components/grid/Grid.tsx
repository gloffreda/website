import React, { UIEventHandler } from 'react';
import styled, { css } from 'styled-components';

import { TSpacings } from '../../definitions/types/ContextTheme';
import { screens } from '../../themes/default';

type TGapValue = keyof TSpacings;

// eslint-disable-next-line @typescript-eslint/naming-convention
type TSizes = { sm?: number; md?: number; lg?: number; xl?: number; '2xl'?: number };
// eslint-disable-next-line @typescript-eslint/naming-convention
type TGap = { sm?: TGapValue; md?: TGapValue; lg?: TGapValue; xl?: TGapValue; '2xl'?: TGapValue };

type TStyledRowProps = { cols?: TSizes; gap?: TGap };
type TStyledColProps = { span?: TSizes };
//
type TGridContainerProps = { children: React.ReactNode; header?: string[]; className?: string };

type TGridRowProps = {
  children: React.ReactNode;
  className?: string;
  scrollbarDisabled?: boolean;
  style?: React.CSSProperties;
  onScroll?: UIEventHandler<HTMLDivElement>;
} & TStyledRowProps;

type TGridColProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
} & TStyledColProps;

export function GridContainer({ children, header, ...props }: TGridContainerProps) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}

export function GridRow({ children, scrollbarDisabled, ...props }: TGridRowProps) {
  return <StyledRow {...props}>{children}</StyledRow>;
}

export function GridCol({ children, ...props }: TGridColProps) {
  return <StyledCol {...props}>{children}</StyledCol>;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.div<TStyledRowProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols?.sm ?? 2}, minmax(0, 1fr))`};
  gap: ${({ gap, theme }) => (gap?.sm ? theme.spacings[gap.sm] : 0)};
  ${({ cols, theme, gap }) =>
    screens.sm(css`
      grid-template-columns: ${`repeat(${cols?.sm ?? 2}, minmax(0, 1fr))`};
      ${gap?.sm ? `gap: ${theme.spacings[gap.sm]}` : ''};
    `)};
  ${({ cols, theme, gap }) =>
    screens.md(css`
      grid-template-columns: ${`repeat(${cols?.md ?? cols?.sm ?? 2}, minmax(0, 1fr))`};
      ${gap?.md ? `gap: ${theme.spacings[gap.md]}` : ''};
    `)};
  ${({ cols, theme, gap }) =>
    screens.lg(css`
      grid-template-columns: ${`repeat(${cols?.lg ?? cols?.sm ?? 2}, minmax(0, 1fr))`};
      ${gap?.lg ? `gap: ${theme.spacings[gap.lg]}` : ''};
    `)};
  ${({ cols, theme, gap }) =>
    screens.xl(css`
      grid-template-columns: ${`repeat(${cols?.xl ?? cols?.sm ?? 2}, minmax(0, 1fr))`};
      ${gap?.xl ? `gap: ${theme.spacings[gap.xl]}` : ''};
    `)};
  ${({ cols, theme, gap }) =>
    screens['2xl'](css`
      grid-template-columns: ${`repeat(${cols?.['2xl'] ?? cols?.sm ?? 2}, minmax(0, 1fr))`};
      ${gap?.['2xl'] ? `gap: ${theme.spacings[gap['2xl']]}` : ''};
    `)};
`;

const StyledCol = styled.div<TStyledColProps>`
  grid-column: ${({ span }) => `span ${span?.sm ?? 1} / span ${span?.sm ?? 1}`};
  flex-basis: 0;
  flex-grow: 1;
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

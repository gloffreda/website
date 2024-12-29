import styled, { css } from 'styled-components';

import { screens } from '../../../../themes/default';
import { TSizes } from '../../types';

type TStyledColProps = { span?: TSizes };

type TTableBodyColProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
} & TStyledColProps;

export function TableBodyCol({ children, onClick, className, ...props }: TTableBodyColProps) {
  return (
    <StyledCol className={`text-break px-3 ${className ?? ''}`} {...props} onClick={onClick}>
      {children}
    </StyledCol>
  );
}

const StyledCol = styled.div<TStyledColProps>`
  padding-top: ${({ theme }) => theme.spacings[4]};
  padding-bottom: ${({ theme }) => theme.spacings[4]};
  grid-column: ${({ span }) => `span ${span?.sm ?? 1} / span ${span?.sm ?? 1}`};
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  word-wrap: break-word;
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

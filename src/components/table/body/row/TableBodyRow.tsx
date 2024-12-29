import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { screens } from '../../../../themes/default';
import { Label } from '../../../Typography';
import { TableContext } from '../../TableRoot';
import { TSizes } from '../../types';

type TStyledRowProps = { cols?: TSizes; disableHover?: boolean };
type TTableBodyRowProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string;
  style?: React.CSSProperties;
} & TStyledRowProps;

export function TableBodyRow({ children, onClick, style, ...props }: TTableBodyRowProps) {
  const tableCtx = useContext(TableContext);
  const header = tableCtx.state.header;

  if (header.length) {
    return (
      <StyledRow className='text-break' {...props} onClick={onClick} style={style}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return child;
          }
          if (typeof header[index] === 'string') {
            return React.cloneElement(
              child,
              {},
              <>
                <Label
                  key={`label-header-${header[index]}-${index}`}
                  text={header[index]}
                  className='truncate'
                  size='xs'
                />
                {React.Children.toArray(child.props.children)}
              </>,
            );
          }
          return React.cloneElement(child);
        })}
      </StyledRow>
    );
  }
  return (
    <StyledRow className='text-break ' {...props} onClick={onClick} style={style}>
      {children}
    </StyledRow>
  );
}

const StyledRow = styled.div<TStyledRowProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols?.sm ?? 2}, minmax(0, 1fr))`};
  row-gap: ${({ theme }) => theme.spacings[4]};
  column-gap: ${({ theme }) => theme.spacings[4]};
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.card_colors.DEFAULT['background-color']};
  margin-bottom: ${({ theme }) => theme.spacings[2]};
  :hover {
    background-color: ${({ theme, disableHover }) => (disableHover ? 'initial' : theme.colors.light_gray)};
  }
  :last-child {
    margin-bottom: 0;
  }

  border: solid 1px ${({ theme }) => theme.colors.light_gray};
  filter: none;
  border-radius: ${({ theme }) => theme.border_radius['2xl']};

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

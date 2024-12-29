import React from 'react';
import styled, { css } from 'styled-components';

import { TBorderRadius, TCardColors, TDropShadows } from '../../definitions/types/ContextTheme';

type TStyledCardRootProps = {
  enableHover: boolean;
  borderRadius: keyof TBorderRadius;
  cardTheme: keyof TCardColors;
  shadow: keyof TDropShadows;
};

export type TCardRootProps = {
  enableHover?: boolean;
  borderRadius?: keyof TBorderRadius;
  children: React.ReactNode;
  className?: string;
  theme?: keyof TCardColors;
  shadow?: keyof TDropShadows;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
};

const hoverStyle = css`
  :hover {
    filter: ${({ theme }) => theme.drop_shadows['xl']};
  }
`;

export const CardRoot = ({ theme, ...props }: TCardRootProps) => (
  <StyledCardRoot
    cardTheme={theme ?? 'DEFAULT'}
    borderRadius='xl'
    shadow='DEFAULT'
    enableHover={false}
    {...props}
  >
    {props.children}
  </StyledCardRoot>
);

const StyledCardRoot = styled.div<TStyledCardRootProps>`
  border-radius: ${({ theme, borderRadius }) => theme.border_radius[borderRadius]};
  /* filter: ${({ theme, shadow }) => theme.drop_shadows[shadow]}; */
  ${({ theme, cardTheme }) => theme.card_colors[cardTheme]}
  transition: all 200ms ease;
  ${({ enableHover }) => (enableHover ? hoverStyle : '')}
  display: flex;
  flex-direction: column;
`;

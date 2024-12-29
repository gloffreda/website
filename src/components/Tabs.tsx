import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';
import { Label } from './Typography';

type TTabContainerProps = {
  children: React.ReactNode[] | React.ReactNode;
};
export function TabContainer({ children, ...props }: TTabContainerProps) {
  return (
    <StyledTabContainer size={children instanceof Array ? children?.length : 1} {...props}>
      {children}
    </StyledTabContainer>
  );
}
type TTabItemProps = {
  icon?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  active?: boolean;
  disabled?: boolean;
};
type TStyledListItemProps = {
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  disabled?: boolean;
};

export function TabItem({ onClick, icon, title, active = false, disabled }: TTabItemProps) {
  return (
    <StyledListItem
      title={title}
      onClick={!disabled ? onClick : undefined}
      active={active}
      disabled={disabled}
    >
      {icon && <Icon icon={icon} className='mr-2 shrink-0' size='DEFAULT' />}
      {title && <Label text={title} className='truncate cursor-pointer' weight='semibold' size='DEFAULT' />}
    </StyledListItem>
  );
}

const StyledTabContainer = styled.ul<{ size: number }>`
  display: grid;
  gap: ${({ theme }) => theme.spacings[2]};
  grid-template-columns: repeat(${({ size }) => size}, minmax(0, 1fr));
  border-radius: ${({ theme }) => theme.border_radius['2xl']};
  background-color: ${({ theme }) => theme.colors.light_gray};
  padding: ${({ theme }) => theme.spacings[1]};
`;

const StyledListItem = styled.li<TStyledListItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms all;
  border-radius: ${({ theme }) => theme.border_radius['2xl']};
  padding: ${({ theme }) => theme.spacings[3]};
  color: ${({ theme, active }) => (active ? theme.text_color.primary : theme.text_color.light_gray)};
  background-color: ${({ theme, active }) => (active ? `${theme.colors.white} ` : 'transparent')};
  filter: ${({ theme, active }) => (active ? theme.drop_shadows.md : null)};
  :hover {
    color: ${({ theme, disabled }) => (disabled ? undefined : theme.text_color.primary)};
    background-color: ${({ theme, disabled }) => (disabled ? undefined : theme.colors.white)};
    filter: ${({ theme }) => theme.drop_shadows.md};
  }
  cursor: ${({ onClick, disabled }) => (disabled ? 'default' : onClick ? 'pointer' : null)};
`;

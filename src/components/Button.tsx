import styled from 'styled-components';

import { TButtonColors, TButtonSizes } from '../definitions/types/ContextTheme';

import { Icon, TIconProps } from './Icon';
import { BouncingBar } from './Loader';
import { Label, TLabelProps } from './Typography';

type TStyledButtonProps = {
  btnTheme: keyof TButtonColors;
  size: keyof TButtonSizes;
  center: boolean;
};

type TButtonProps = {
  theme?: keyof TButtonColors;
  size?: keyof TButtonSizes;
  center?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  button?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  label?: TLabelProps;
  icon?: TIconProps;
};

type TConfirmationButtonProps = {
  confirm?: {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    label?: string;
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
    theme?: keyof TButtonColors;
    size?: keyof TButtonSizes;
  };
  cancel?: {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    label?: string;
    loading?: boolean;
    icon?: string;
    theme?: keyof TButtonColors;
    size?: keyof TButtonSizes;
  };
  remove?: {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    label?: string;
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
    size?: keyof TButtonSizes;
  };
  className?: string;
};

type TButtonGroupProps = {
  buttons: TButtonProps[];
};
export function Button({
  theme = 'DEFAULT',
  size = 'DEFAULT',
  loading = false,
  center = false,
  button,
  label,
  icon,
  children,
  ...props
}: TButtonProps) {
  return (
    <StyledButton btnTheme={theme} size={size} center={center} {...button} {...props}>
      {children}
      <StyledBouncingBarContainer>{loading && <StyledBouncingBar />}</StyledBouncingBarContainer>
      {icon && <Icon size={size} className={`shrink-0 ${label?.text ? 'mr-3' : ''}`} {...icon} />}
      {label && <Label className='truncate' size={size} {...label} />}
    </StyledButton>
  );
}

export function ButtonOutline({
  theme = 'DEFAULT',
  icon,
  size = 'DEFAULT',
  loading = false,
  button,
  label,
}: TButtonProps) {
  return (
    <StyledButtonOutline btnTheme={theme} size={size} center={false} {...button}>
      <StyledBouncingBarContainer>{loading && <StyledBouncingBarOutLine />}</StyledBouncingBarContainer>
      {icon && <Icon size={size} className={`shrink-0 ${label?.text ? 'mr-3' : ''}`} {...icon} />}
      {label && <Label className='truncate' size={size} {...label} />}
    </StyledButtonOutline>
  );
}

export function ButtonGroup({ buttons }: TButtonGroupProps) {
  return (
    <StyledGroup>
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </StyledGroup>
  );
}

export function ConfirmationButton({ confirm, cancel, remove, className }: TConfirmationButtonProps) {
  return (
    <div className={`flex gap-3 justify-center ${className} relative`}>
      {cancel && (
        <Button
          button={{ onClick: cancel.onClick }}
          label={{ text: cancel.label ?? 'CANCEL' }}
          icon={{ icon: cancel.icon ?? 'LuX' }}
          theme={cancel.theme ?? 'transparent'}
          loading={cancel.loading}
          size={cancel.size}
        />
      )}
      {confirm && (
        <Button
          button={{ onClick: confirm?.onClick, disabled: confirm?.disabled }}
          label={{ text: confirm?.label ?? 'CREATE' }}
          icon={{ icon: confirm?.icon ?? 'LuCheck' }}
          theme={confirm.theme}
          loading={confirm?.loading}
          size={confirm.size}
        />
      )}
      {!remove?.disabled && remove ? (
        <div className='absolute top-0 right-4 '>
          <DeleteButton
            text={remove.label}
            onClick={remove.onClick}
            loading={!!remove.loading}
            size={remove.size}
          />
        </div>
      ) : null}
    </div>
  );
}

export function DeleteButton({
  onClick,
  loading,
  size,
  text,
  disabled,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  disabled?: boolean;
  size?: keyof TButtonSizes;
  text?: string;
}) {
  return (
    <Button
      icon={{ icon: 'LuTrash2', theme: 'danger', size }}
      label={{ text: text, theme: 'danger', size }}
      button={{ onClick, disabled }}
      theme={'light'}
      size={size}
      loading={loading}
    />
  );
}

export function EditButton({
  onClick,
  loading,
  size,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  size?: keyof TButtonSizes;
  className?: string;
}) {
  return (
    <Button
      icon={{ icon: 'LuEdit' }}
      button={{ onClick }}
      theme='transparent'
      size={size}
      loading={loading}
    />
  );
}

export function CloseButton({
  theme = 'light',
  size = 'DEFAULT',
  loading = false,
  center = false,
  button,
  label,
  icon,
}: TButtonProps) {
  return (
    <StyledCloseButton btnTheme={theme} size={size} center={center} {...button}>
      {loading && <StyledBouncingBar />}
      <Icon icon='LuX' size={size} className={`shrink-0 ${label?.text ? 'mr-3' : ''}`} {...icon} />
      {label && <Label className='truncate' size={size} {...label} />}
    </StyledCloseButton>
  );
}

const StyledBouncingBar = styled(BouncingBar)``;

const StyledBouncingBarContainer = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.border_radius['xl']};
  overflow: hidden;
  height: 100%;
  left: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const StyledBouncingBarOutLine = styled(BouncingBar)`
  background-color: rgba(000, 000, 000, 0.15);
  ::after {
    background-color: #555;
  }
`;

const StyledButtonOutline = styled.button<TStyledButtonProps>`
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'inherit')};
  font-weight: 600;
  transition: all 0.2s ease 0s;
  border-radius: ${({ theme }) => theme.border_radius['xl']};
  color: ${({ theme, btnTheme }) => theme.button_colors[btnTheme]['background-color']};
  border: solid 2px ${({ theme, btnTheme }) => theme.button_colors[btnTheme]['background-color']};
  cursor: pointer;
  label {
    cursor: pointer;
  }
  ${({ theme, size }) => theme.font_size[size]}
  ${({ theme, size }) => theme.button_sizes[size]}

  :hover {
    color: ${({ theme, btnTheme }) => theme.button_colors[btnTheme][':hover']['background-color']};
    border: solid 2px ${({ theme, btnTheme }) => theme.button_colors[btnTheme][':hover']['background-color']};
  }
`;

const StyledButton = styled.button<TStyledButtonProps>`
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'inherit')};
  font-weight: 500;
  transition: all 0.2s ease 0s;
  border-radius: ${({ theme }) => theme.border_radius['xl']};
  cursor: pointer;

  ${({ theme, size }) => theme.button_sizes[size]}
  ${({ theme, btnTheme }) => theme.button_colors[btnTheme]};

  :not(:disabled) label {
    cursor: pointer;
  }

  :disabled {
    ${({ theme, btnTheme }) => theme.button_colors[btnTheme][':disabled']};
    opacity: 0.6;
    cursor: default;
    label: {
      cursor: default;
    }
  }
`;

const StyledCloseButton = styled(StyledButton)`
  padding: ${({ theme }) => theme.spacings[2]};
  justify-content: center;
  transition: all 200ms;
  min-width: 38px;
  min-height: 38px;
`;

const StyledGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  button {
    flex: 1 1 auto;
  }
  button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

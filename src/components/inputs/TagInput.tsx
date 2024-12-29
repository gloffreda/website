import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

import { TBadgeColors, TFontSizes } from '../../definitions/types/ContextTheme';
import { TTags } from '../../definitions/types/General';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Label, TLabelProps } from '../Typography';

import { StyledInput } from './styles';

type TTagInputProps = {
  label?: TLabelProps;
  value: TTags;
  theme?: keyof TBadgeColors;
  onChange: (tags: TTags) => void;
};

type TStyledBadge = {
  badgeTheme: keyof TBadgeColors;
};

type TTagItemProps = {
  value: { key: string; value: string };
  theme?: keyof TBadgeColors;
  onChange: (tag: { key: string; value: string }) => void;
  onRemove: (key: string) => void;
  duplicated: boolean;
  isLast: boolean;
  hasValue: boolean;
};

type TBadgeProps = {
  tag: string | number;
  theme?: keyof TBadgeColors;
  onRemove?: (tags: string | number) => void;
  onClick?: React.MouseEventHandler;
  className?: string;
  size?: keyof TFontSizes;
};

export function TagInput({ label, theme, value, onChange }: TTagInputProps) {
  useEffect(() => {
    const [key] = value[value.length - 1] ?? [];
    if (key || key === undefined) {
      onChange([...value, ['', '']]);
    }
  }, [value, onChange]);

  function handleOnChange(index: number, tag: { key: string; value: string }) {
    const newTags = value.map((currentTag, tagIndex) => {
      if (tagIndex === index) return [tag.key, tag.value] as [string, string];
      return currentTag;
    });
    onChange(newTags);
  }

  function handleOnRemove(index: number) {
    const newTags = value.filter((_, tagIndex) => tagIndex !== index);
    onChange(newTags);
  }

  const duplicateKeys = value.map(([key]) => {
    const count = value.filter(([k]) => k === key).length;
    return count > 1;
  });
  return (
    <>
      {label && <Label weight='light' className='ms-3' {...label} />}
      <div className='flex flex-wrap gap-2'>
        {value.map(([tagKey, tagValue], index) => (
          <TagItem
            key={index}
            theme={theme}
            value={{ key: tagKey, value: tagValue }}
            onChange={tag => handleOnChange(index, tag)}
            onRemove={() => handleOnRemove(index)}
            duplicated={duplicateKeys[index]}
            isLast={index === value.length - 1}
            hasValue={value.length > 1}
          />
        ))}
      </div>
    </>
  );
}

function TagItem({ value: tag, onChange, onRemove, duplicated, isLast, hasValue }: TTagItemProps) {
  const intl = useIntl();
  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...tag, [ev.target.name]: ev.target.value });
  }

  return (
    <div className='flex w-full gap-2'>
      <InputIcon
        placeholder={isLast ? intl.formatMessage({ id: 'KEY' }) : undefined}
        name='key'
        value={tag.key}
        onChange={handleChange}
        duplicated={duplicated}
      />
      <InputIcon
        placeholder={isLast ? intl.formatMessage({ id: 'VALUE' }) : undefined}
        name='value'
        value={tag.value}
        onChange={handleChange}
      />
      {!isLast && (
        <Button icon={{ icon: 'LuMinus' }} theme='light' button={{ onClick: () => onRemove(tag.key) }} />
      )}
      {hasValue && isLast && <div className='shrink-0' style={{ width: '58px' }} />}
    </div>
  );
}

type TInputIconProps = {
  name: string;
  value: string;
  placeholder?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  duplicated?: boolean;
};

function InputIcon({ name, value, placeholder, onKeyDown, onChange, duplicated }: TInputIconProps) {
  const intl = useIntl();

  return (
    <div className='relative flex w-full items-center'>
      {duplicated && (
        <Icon
          title={intl.formatMessage({ id: 'TAG_ALREADY_CREATED' })}
          icon='LuAlertTriangle'
          size={'lg'}
          className='absolute right-2'
          theme='danger'
        />
      )}
      <StyledInput
        name={name}
        value={value}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </div>
  );
}

export function Badge({ tag, theme = 'DEFAULT', onRemove, className, size, onClick }: TBadgeProps) {
  return (
    <StyledBadge badgeTheme={theme} className={className} onClick={onClick}>
      <div className='flex items-center'>
        <Label text={tag.toString()} isName size={size} />
        {onRemove && <Icon icon='LuX' className='ml-2' onClick={() => onRemove(tag)} />}
      </div>
    </StyledBadge>
  );
}

const StyledBadge = styled.span<TStyledBadge>`
  cursor: default;
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacings[1]} ${theme.spacings[3]}`};
  border-radius: ${({ theme }) => theme.border_radius.full};
  ${({ theme }) => theme.font_size.sm};
  font-weight: ${({ theme }) => theme.font_weight.semibold};
  ${({ theme, badgeTheme }) => theme.badge_colors[badgeTheme]};
  svg {
    cursor: pointer;
    color: ${({ theme, badgeTheme }) => theme.badge_colors[badgeTheme].color};
  }
  :last-child {
    margin-right: 0;
  }
`;

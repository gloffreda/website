import { TButtonSizes } from '../../definitions/types/ContextTheme';
import { ButtonGroup } from '../Button';
import { Label, TLabelProps } from '../Typography';

type TOptionValue = undefined | string | number | boolean;
type TValue = TOptionValue | TOptionValue[];
type TOption = { label: string; value: TOptionValue; isName?: boolean; disabledIcon?: string };
export type TSyntheticChangeEvent<T = TValue> = {
  target: { name: string; value: T };
};

type TSelectInputProps<T = TValue> = {
  label?: TLabelProps;
  theme?: 'primary' | 'secondary';
  input?: {
    name?: string;
    value: TValue;
    onChange?: (event: TSyntheticChangeEvent<T>) => void;
    size?: keyof TButtonSizes;
  };
  options: TOption[];
};

export function OptionInput<T = TValue>({ options, label, input, theme }: TSelectInputProps<T>) {
  const valueIsArray = input?.value instanceof Array;
  function handleOnChange(value: TOptionValue) {
    if (!input?.onChange) return;
    const inputValue = input?.value;
    if (inputValue instanceof Array) {
      const toRemove = inputValue.includes(value);
      if (toRemove) {
        input?.onChange({
          target: {
            name: input.name ?? '',
            value: inputValue.filter(iValue => iValue !== value) as T,
          },
        });
      } else {
        input?.onChange({ target: { name: input.name ?? '', value: [...inputValue, value] as T } });
      }
      return;
    }
    input?.onChange({ target: { name: input.name ?? '', value: value as T } });
  }
  return (
    <>
      {label && <Label weight='light' {...label} />}
      <ButtonGroup
        buttons={options.map(option => ({
          theme:
            theme === 'secondary'
              ? isSelected(input?.value, option.value)
                ? 'secondary'
                : 'light'
              : isSelected(input?.value, option.value)
                ? 'success'
                : 'DEFAULT',
          label: { text: option.label, isName: option.isName },
          icon: {
            icon: isSelected(input?.value, option.value) ? 'LuCheck' : option.disabledIcon ?? '',
          },
          button: {
            onClick: () => handleOnChange(option.value),
            disabled: valueIsArray ? false : isSelected(input?.value, option.value),
          },
          size: input?.size,
        }))}
      />
    </>
  );
}

function isSelected(value: TValue, optionValue: TOptionValue) {
  if (value instanceof Array) {
    return value.includes(optionValue);
  }
  return value === optionValue;
}

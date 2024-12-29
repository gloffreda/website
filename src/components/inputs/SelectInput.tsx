import { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { Label, TLabelProps } from '../Typography';

import { StyledSelect } from './styles';

export type TOption = { label: string; value: string | number; isName?: boolean };

type TSelectInputProps = {
  label?: TLabelProps;
  input?: React.InputHTMLAttributes<HTMLSelectElement>;

  options: TOption[];
};

export function SelectInput({ label, input, options: propsOptions }: TSelectInputProps) {
  const intl = useIntl();

  const options = useMemo(() => {
    return propsOptions.map(option => ({
      ...option,
      label: option.isName ? option.label : intl.formatMessage({ id: option.label }),
    }));
  }, [propsOptions, intl]);

  const value = useMemo(() => {
    if (!input?.value) return -999999;
    if (!~options.findIndex(option => option.value === input?.value)) return -999999;
    return input?.value;
  }, [input?.value, options]);

  return (
    <>
      {label && <Label weight='light' className='ms-3' breakLine {...label} />}
      <StyledSelect
        {...input}
        className={input?.className}
        value={value}
        defaultValue={input?.defaultValue}
        onChange={input?.onChange}
      >
        <option disabled value={-999999}>
          {input?.placeholder ?? 'Select...'}
        </option>
        {options.map((optionItem, index) => (
          <option key={optionItem.value} value={optionItem.value}>
            {optionItem.label}
          </option>
        ))}
      </StyledSelect>
    </>
  );
}

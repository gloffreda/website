import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import styled, { useTheme } from 'styled-components';

import { TFontSizes, TFontWeight, TTextColors } from '../definitions/types/ContextTheme';

export type TFormatXMLElementFn<T, R = string | T | (string | T)[]> = (parts: Array<string | T>) => R;

export type TLabelProps = {
  text?: string;
  className?: string;
  htmlTitle?: string;
  onClick?: React.MouseEventHandler;
  size?: keyof TFontSizes;
  weight?: keyof TFontWeight;
  theme?: keyof TTextColors;
  useColor?: string;
  values?: Record<string, string>;
  isName?: boolean;
  htmlTitleIsName?: boolean;
  style?: React.CSSProperties;
  fontFamily?: 'sans' | 'serif' | 'mono' | 'display' | 'body';
  breakLine?: boolean;
  fontStyle?: 'inherit' | 'italic';
};

type TStyledProps = {
  size: keyof TFontSizes;
  color: string;
  weight: keyof TFontWeight;
  fontFamily: 'sans' | 'serif' | 'mono' | 'display' | 'body';
  breakLine: boolean;
  fontStyle: 'inherit' | 'italic';
};

const FONT_FAMILIES = {
  sans: 'Lexend',
  serif: 'Lexend',
  mono: 'IBM Plex Mono',
  display: 'Lexend',
  body: 'Lexend',
};

export function Label({
  text: propsText,
  htmlTitle,
  onClick,
  size = 'DEFAULT',
  className,
  isName,
  htmlTitleIsName,
  theme = 'inherit',
  weight = 'inherit',
  useColor,
  values,
  style,
  breakLine = false,
  fontFamily = 'sans',
  fontStyle = 'inherit',
}: TLabelProps) {
  const intl = useIntl();
  const themeCtx = useTheme();

  const color = useMemo(() => {
    if (useColor) return useColor;
    return themeCtx.text_color[theme];
  }, [useColor, theme, themeCtx]);

  const text = useMemo(() => {
    if (!propsText) return '';
    if (isName) return propsText;
    return intl.formatMessage({ id: propsText }, values);
  }, [isName, propsText, intl, values]);

  const title = useMemo(() => {
    if (!htmlTitle) return undefined;
    if (htmlTitleIsName) return htmlTitle;
    return intl.formatMessage({ id: htmlTitle }, values);
  }, [htmlTitleIsName, htmlTitle, intl, values]);

  return (
    <StyledLabel
      breakLine={breakLine}
      color={color}
      className={className}
      title={title}
      onClick={onClick}
      size={size}
      style={style}
      weight={weight}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
    >
      {text}
    </StyledLabel>
  );
}

const StyledLabel = styled.label<TStyledProps>`
  display: block;
  color: ${({ color }) => color};
  white-space: ${({ breakLine }) => (breakLine ? 'pre-line' : 'nowrap')};
  font-weight: ${({ theme, weight }) => theme.font_weight[weight]};
  ${({ theme, size }) => theme.font_size[size]};
  cursor: inherit;
  font-family: ${({ fontFamily }) => FONT_FAMILIES[fontFamily]};
  font-style: ${({ fontStyle }) => fontStyle};
`;

type TLabelInfoProps = {
  label: string;
  value?: string;
  isNameLabel?: boolean;
  isNameValue?: boolean;
  sizeLabel?: keyof TFontSizes;
  sizeValue?: keyof TFontSizes;
  weightLabel?: keyof TFontWeight;
  weightValue?: keyof TFontWeight;
  themeLabel?: keyof TTextColors;
  themeValue?: keyof TTextColors;
};

export function LabelInfo({
  label,
  value,
  isNameLabel,
  isNameValue,
  sizeLabel,
  sizeValue,
  weightLabel,
  weightValue,
  themeLabel,
  themeValue,
}: TLabelInfoProps) {
  return (
    <div>
      <Label
        text={label}
        isName={isNameLabel}
        theme={`${themeLabel ? themeLabel : 'dark_gray'}`}
        size={`${sizeLabel ? sizeLabel : 'DEFAULT'}`}
        weight={`${weightLabel ? weightLabel : 'medium'}`}
      />
      {value ? (
        <Label
          className='indent-0.5'
          text={value}
          theme={`${themeValue ? themeValue : 'dark_gray'}`}
          size={`${sizeValue ? sizeValue : 'sm'}`}
          weight={`${weightValue ? weightValue : 'DEFAULT'}`}
          isName={isNameValue}
        />
      ) : null}
    </div>
  );
}

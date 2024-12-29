import { NumericFormat } from 'react-number-format';
import styled, { css } from 'styled-components';

import FiChevronDown from '../../assets/icons/FiChevronDown.svg';

const InputDefault = css`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  border: none;
  background-color: ${({ theme }) => theme.colors.bright_gray};
  color: ${({ theme }) => theme.text_color.gray};
  border-radius: ${({ theme }) => theme.border_radius['xl']};
  :active,
  :focus,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.dark_gray};
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
    outline: 0;
    color: ${({ theme }) => theme.colors.white};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
  }
  :disabled {
    box-shadow: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FormContainer = styled.div`
  input {
    margin-bottom: ${({ theme }) => theme.spacings[3]};
  }
`;

export const StyledInput = styled.input`
  ${InputDefault}
  ::file-selector-button {
    ${({ theme }) => theme.button_colors.DEFAULT};

    margin-right: ${({ theme }) => theme.spacings['3']};
    border: none;
    height: 100%;
    border-radius: ${({ theme }) => theme.border_radius['DEFAULT']};
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
`;

export const StyledCheckboxInput = styled.input`
  ${InputDefault}
  height: calc(20px);
  width: calc(20px);
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
  :checked {
    accent-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledNumberInput = styled(NumericFormat)`
  ${InputDefault}
`;

export const StyledSelect = styled.select`
  ${InputDefault}
  appearance: none;
  padding: 0.375rem 2rem 0.375rem 0.75rem;
  background-image: url(${FiChevronDown});
  background-size: 16px;
  background-position: calc(100% - 0.5em) center;
  background-repeat: no-repeat;
`;

export const StyledTextArea = styled.textarea`
  ${InputDefault}
  height: 70px;
  min-height: calc(1.5em + 0.75rem + 2px);
`;

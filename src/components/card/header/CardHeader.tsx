import styled from 'styled-components';

export const CardHeaderRoot = styled.div`
  padding: ${({ theme }) => theme.spacings[3]};
  /* padding: ${({ theme }) => `${theme.spacings[3]} ${theme.spacings[3]} 0 ${theme.spacings[3]}`}; */
  border-top-left-radius: ${({ theme }) => theme.border_radius['xl']};
  border-top-right-radius: ${({ theme }) => theme.border_radius['xl']};
  border-bottom: solid 1px ${({ theme }) => theme.colors.light_gray};
`;

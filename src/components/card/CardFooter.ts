import styled from 'styled-components';

export const CardFooter = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacings[3]};
  margin-top: auto;
  border-top: solid 1px ${({ theme }) => theme.colors.light_gray};
`;

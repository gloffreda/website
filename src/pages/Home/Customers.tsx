import styled, { css } from 'styled-components';

import arcelormittalLogo from '../../assets/arcelormittal_logo.png';
import azulLogo from '../../assets/azul_logo.png';
import bridgestoneLogo from '../../assets/bridgestone_logo.svg';
import latamLogo from '../../assets/latam_logo.png';
import oracleLogo from '../../assets/oracle_logo.svg';
import synyLogo from '../../assets/syny_logo.svg';
import { screens } from '../../themes/default';
const LOGOS = [arcelormittalLogo, azulLogo, bridgestoneLogo, latamLogo, oracleLogo, synyLogo];

export function Customers() {
  return (
    <StyledCustomerList>
      {LOGOS.map((logo, index) => (
        <Customer key={index} logo={logo} />
      ))}
    </StyledCustomerList>
  );
}

function Customer({ logo }: { logo: string }) {
  return (
    <StyledCustomerItem>
      <Logo src={logo} />
    </StyledCustomerItem>
  );
}

const StyledCustomerList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacings[5]};
  flex-wrap: wrap;
  justify-content: center;
  ${screens.sm(css``)}

  ${screens.md(css``)}

  ${({ theme }) =>
    screens.lg(css`
      gap: ${theme.spacings[8]};
    `)}

  ${({ theme }) =>
    screens.xl(css`
      gap: ${theme.spacings[8]};
    `)}

  ${({ theme }) =>
    screens['2xl'](css`
      gap: ${theme.spacings[8]};
    `)}
`;
const StyledCustomerItem = styled.li`
  border: solid 1px ${({ theme }) => theme.colors.light_gray};
  padding: ${({ theme }) => theme.spacings[3]};
  border-radius: ${({ theme }) => theme.border_radius.xl};
  width: 100px;
  height: 45px;
  flex: 0 0 auto;
  filter: ${({ theme }) => theme.drop_shadows.lg};
  background-color: ${({ theme }) => theme.colors.white};

  ${screens.sm(css``)}

  ${screens.md(css``)}
 
  ${screens.lg(css`
    width: 130px;
  `)}
 
  ${screens.xl(css`
    width: 130px;
  `)}
  ${screens['2xl'](css`
    width: 130px;
  `)}
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

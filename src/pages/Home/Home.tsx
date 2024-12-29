import styled, { css } from 'styled-components';

import { screens } from '../../themes/default';

import { AboutUs } from './AboutUs';
import { Customers } from './Customers';
import { FirstBlock } from './FirstBlock';
import { Footer } from './Footer';

export function Home() {
  return (
    <div className='overflow-auto'>
      <FirstBlock />
      <Container>
        <Customers />
        <div className='pt-20' />
        <AboutUs />
      </Container>
      <div className='pt-20' />
      <Footer />
    </div>
  );
}
const Container = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  z-index: 2;
  padding-top: ${({ theme }) => theme.spacings[3]};
  padding-left: ${({ theme }) => theme.spacings[3]};
  padding-right: ${({ theme }) => theme.spacings[3]};
  width: 100vw;

  ${screens.sm(css`
    width: 100vw;
  `)}

  ${screens.md(css`
    width: 100vw;
  `)}
 
  ${screens.lg(css`
    width: 80vw;
    /* padding: 0; */
  `)}
 
  ${screens.xl(css`
    width: 70vw;
    /* padding: 0; */
  `)}
  ${screens['2xl'](css`
    width: 60vw;
    /* padding: 0; */
  `)}
`;

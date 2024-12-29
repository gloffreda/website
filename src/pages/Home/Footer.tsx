import styled, { css } from 'styled-components';

import logo from '../../assets/logo-color.svg';
import { Label } from '../../components/Typography';
import { screens } from '../../themes/default';

export function Footer() {
  return (
    <Container>
      <ContentContainer>
        <div className=''>
          <Img src={logo} />
        </div>
        <HorizontalDivisor />

        <div className='flex gap-2 flex-col'>
          <Label text='CONTACT' theme='bright_gray' size='2xl' />
          <div className='flex gap-3'>
            <Label text='EMAIL' weight='light' theme='bright_gray' />
            <Label text='talk@loffreda.com.br' weight='medium' theme='white' isName />
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacings[8]};
  padding-left: ${({ theme }) => theme.spacings[3]};
  padding-right: ${({ theme }) => theme.spacings[3]};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;

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

const Container = styled.div`
  /* height: 100px; */
  padding: ${({ theme }) => theme.spacings[8]};
  background-color: black;
`;
const HorizontalDivisor = styled.div`
  border-left: solid 1px ${({ theme }) => theme.colors['bg-gray-400']};
  margin-right: ${({ theme }) => theme.spacings[3]};
  margin-left: ${({ theme }) => theme.spacings[3]};
  height: 40px;
`;
const Img = styled.img`
  width: 70px;
`;

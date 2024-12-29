import styled, { css } from 'styled-components';

import bgImage from '../../assets/3628702_582.svg';
// import bgImage from '../../assets/3628749_629.svg';
// import bgImage from '../../assets/3629633_794.svg';
// import bgImage from '../../assets/4102852_944.svg';
import { Card } from '../../components/card';
import { Label } from '../../components/Typography';
import { screens } from '../../themes/default';
import { color } from '../../utils/color';

import { Header } from './Header';

export function FirstBlock() {
  return (
    <div className='p-3'>
      <StyledCardRoot>
        <StyledCardBody>
          <Img src={bgImage} />
          <Header />
          <SideBlock>
            <StyledPhrase text='MAIN_TITLE' breakLine />
            <Label breakLine theme='dark_gray' size='sm' text='MAIN_DESCRIPTION' />
            <div className='flex items-center justify-normal'>
              <MetricInfo title='100+' description={'FIRST_METRIC'} />
              <HorizontalDivisor />
              <MetricInfo title='200+' description={'SECOND_METRIC'} />
            </div>
          </SideBlock>
        </StyledCardBody>
      </StyledCardRoot>
    </div>
  );
}

function MetricInfo({ title, description }: { title: string; description: string }) {
  return (
    <div className='flex items-center gap-1'>
      <StyledMetrics text={title} isName />
      <Label breakLine size='xs' text={description} />
    </div>
  );
}

const SideBlock = styled.div`
  background-color: ${({ theme }) => color.opacity(theme.card_colors.info['background-color'], 0.3)};
  border-radius: ${({ theme }) => theme.border_radius['3xl']};
  position: relative;
  z-index: 2;
  width: 100%;
  gap: ${({ theme }) => theme.spacings[8]};
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;

  ${screens.sm(css`
    width: 100%;
  `)}

  ${screens.md(css`
    width: 100%;
  `)}
 
  ${screens.lg(css`
    width: 80%;
  `)}
 
  ${screens.xl(css`
    width: 50%;
  `)}
  ${screens['2xl'](css`
    width: 50%;
  `)}
`;

const StyledPhrase = styled(Label)`
  /* color: ${({ theme }) => theme.colors.gray}; */
  font-family: 'Rozha One', serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  line-height: 1;
  position: relative;
  z-index: 1;
  ${screens.md(css`
    font-size: 60px;
  `)}
  ${screens.lg(css`
    font-size: 40px;
  `)}
  ${screens.xl(css`
    font-size: 40px;
  `)}
  ${screens['2xl'](css`
    font-size: 40px;
  `)}
`;

const StyledCardBody = styled(Card.Body)`
  margin: auto;
  padding-top: ${({ theme }) => theme.spacings[3]};
  padding-left: ${({ theme }) => theme.spacings[3]};
  padding-right: ${({ theme }) => theme.spacings[3]};
  padding-bottom: ${({ theme }) => theme.spacings[20]};

  ${screens.sm(css`
    width: 100%;
  `)}

  ${screens.md(css`
    width: 100%;
  `)}
 
  ${({ theme }) =>
    screens.lg(css`
      padding-left: ${theme.spacings[1]};
      width: 80%;
    `)}
 
  ${({ theme }) =>
    screens.xl(css`
      padding-left: ${theme.spacings[1]};
      width: 70%;
    `)}
  ${({ theme }) =>
    screens['2xl'](css`
      padding-left: ${theme.spacings[1]};
      width: 60%;
    `)}
`;

const StyledMetrics = styled(StyledPhrase)`
  font-size: 20px;
  ${screens.md(css`
    font-size: 20px;
  `)}
  ${screens.lg(css`
    font-size: 20px;
  `)}
  ${screens.xl(css`
    font-size: 40px;
  `)}
  ${screens['2xl'](css`
    font-size: 40px;
  `)}
`;

const HorizontalDivisor = styled.div`
  border-left: solid 1px ${({ theme }) => theme.colors['bg-gray-400']};
  margin-right: ${({ theme }) => theme.spacings[3]};
  margin-left: ${({ theme }) => theme.spacings[3]};
  height: 40px;
`;
const StyledCardRoot = styled(Card.Root)`
  ${({ theme }) => theme.card_colors.info}
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  position: absolute;
  right: -30%;
  z-index: 1;
  width: 80%;
  max-height: 110%;
  bottom: -40%;

  ${screens.sm(css`
    right: -30%;
    z-index: 1;
    width: 80%;
    max-height: 110%;
    bottom: -40%;
  `)}

  ${screens.md(css`
    right: -30%;
    z-index: 1;
    max-height: 110%;
    width: 80%;
    bottom: -40%;
  `)}
 
  ${screens.lg(css`
    right: 0;
    width: 40%;
    max-height: 110%;
    bottom: -20%;
  `)}
 
  ${screens.xl(css`
    right: 0;
    width: 40%;
    max-height: 110%;
    bottom: -20%;
  `)}
  ${screens['2xl'](css`
    right: 0;
    width: 40%;
    max-height: 110%;
    bottom: -20%;
  `)}
`;

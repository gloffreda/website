import styled, { css } from 'styled-components';

import { Card } from '../../components/card';
import { Grid } from '../../components/grid';
import { Label } from '../../components/Typography';
import { screens } from '../../themes/default';

export function AboutUs() {
  return (
    <Grid.Root>
      <Grid.Row cols={{ sm: 12 }} gap={{ sm: 3 }}>
        <Grid.Col span={{ sm: 12, md: 5, lg: 5, xl: 5, '2xl': 5 }}>
          <Card.Root>
            <Card.Body className='flex flex-col gap-7'>
              <StyledTitle text='ABOUT_US' breakLine />
              <StyledContent text='ABOUT_US_TITLE' breakLine />
              <Label breakLine theme='dark_gray' size='sm' text='ABOUT_US_TEXT' />
            </Card.Body>
          </Card.Root>
        </Grid.Col>
        <Grid.Col span={{ sm: 12, md: 7, lg: 7, xl: 7, '2xl': 7 }}>
          <Featured />
        </Grid.Col>
      </Grid.Row>
    </Grid.Root>
  );
}
function Featured() {
  const items = [
    {
      value: '15+',
      title: 'FEATURED_ONE_TITLE',
      description: 'FEATURED_ONE_DESCRIPTION',
    },
    {
      value: '200+',
      title: 'FEATURED_TWO_TITLE',
      description: 'FEATURED_TWO_DESCRIPTION',
    },
    {
      value: '5+',
      title: 'FEATURED_THREE_TITLE',
      description: 'FEATURED_THREE_DESCRIPTION',
    },
  ];
  return (
    <Card.Root theme='info'>
      <Card.Body className='flex flex-col gap-7'>
        <StyledTitle text='FEATURED' breakLine />
        <FeaturedList>
          {items.map((item, index) => (
            <FeaturedItem key={index} {...item} />
          ))}
        </FeaturedList>
      </Card.Body>
    </Card.Root>
  );
}
function FeaturedItem({ title, value, description }: { value: string; title: string; description: string }) {
  return (
    <FeaturedListItem>
      <div className='flex flex-col gap-3'>
        <Label text={title} theme='secondary' breakLine size='xs' />
        <StyledFeaturedItemValue isName text={value} breakLine />
      </div>
      <div>
        <Label text={description} theme='dark_gray' breakLine />
      </div>
    </FeaturedListItem>
  );
}

const StyledTitle = styled(Label)`
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Rozha One', serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 25px;
  line-height: 1;
  position: relative;
  z-index: 1;
  ${screens.md(css`
    font-size: 25px;
  `)}
  ${screens.lg(css`
    font-size: 25px;
  `)}
  ${screens.xl(css`
    font-size: 25px;
  `)}
  ${screens['2xl'](css`
    font-size: 25px;
  `)}
`;

const StyledContent = styled(Label)`
  /* color: ${({ theme }) => theme.colors.primary}; */
  font-family: 'Rozha One', serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 25px;
  line-height: 1;
  position: relative;
  z-index: 1;
  ${screens.md(css`
    font-size: 25px;
  `)}
  ${screens.lg(css`
    font-size: 30px;
  `)}
  ${screens.xl(css`
    font-size: 30px;
  `)}
  ${screens['2xl'](css`
    font-size: 30px;
  `)}
`;

const StyledFeaturedItemValue = styled(Label)`
  font-family: 'Rozha One', serif;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  font-size: 60px;
  width: 100px;
  ${screens.md(css`
    font-size: 60px;
  `)}
  ${screens.lg(css`
    font-size: 50px;
  `)}
  ${screens.xl(css`
    font-size: 50px;
  `)}
  ${screens['2xl'](css`
    font-size: 50px;
  `)}
`;
const FeaturedList = styled.ul`
  padding-bottom: ${({ theme }) => theme.spacings[3]};
`;
const FeaturedListItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spacings[6]};
  border-bottom: solid 1px ${({ theme }) => theme.colors['bg-gray-400']};
  padding-bottom: ${({ theme }) => theme.spacings[6]};
  margin-bottom: ${({ theme }) => theme.spacings[6]};
  :last-child {
    border: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

import { useContext } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo-color.svg';
import { ButtonGroup } from '../../components/Button';
import { IntlContext } from '../../contexts/IntlState';
import { ELocales } from '../../definitions/enums/ContextLocale';

export function Header() {
  return (
    <div className='flex justify-between mb-10 relative z-10'>
      <Img src={logo} />
      <ChangeLanguage />
    </div>
  );
}

function ChangeLanguage() {
  const intl = useContext(IntlContext);
  return (
    <div className='relative'>
      <ButtonGroup
        buttons={[
          {
            label: { text: '🇧🇷', size: 'lg', isName: true },
            icon: intl.state.locale === ELocales.PORTUGUESE ? { icon: 'LuCheck' } : undefined,
            size: 'sm',
            button: {
              onClick: () => intl.changeLanguage(ELocales.PORTUGUESE),
            },
            theme: intl.state.locale === ELocales.PORTUGUESE ? 'DEFAULT' : 'tertiary',
          },
          {
            label: { text: '🇺🇸', size: 'lg', isName: true },
            icon: intl.state.locale === ELocales.ENGLISH ? { icon: 'LuCheck' } : undefined,
            size: 'sm',
            button: { onClick: () => intl.changeLanguage(ELocales.ENGLISH) },
            theme: intl.state.locale === ELocales.ENGLISH ? 'DEFAULT' : 'tertiary',
          },
        ]}
      />
    </div>
  );
}

const Img = styled.img`
  width: 70px;
`;

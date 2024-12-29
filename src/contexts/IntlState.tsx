import React, { createContext, Dispatch, useEffect, useReducer } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { ELocales } from '../definitions/enums/ContextLocale';
import { localStorageKeys, localStorageManager } from '../utils/LocalStorageManager';

import { intlInitialState, IntlReducer } from './reducers/intlReducer';
export type TIntlProvider = { children: React.ReactNode };
export interface IReducerAction<T, U> {
  type: T;
  payload: U;
}
export const IntlContext = createContext<{
  state: typeof intlInitialState;
  dispatch: Dispatch<IReducerAction<string, ELocales>>;
  changeLanguage: (language: ELocales) => Promise<void>;
}>({
  state: intlInitialState,
  dispatch: () => null,
  changeLanguage: () => Promise.resolve(),
});

export function IntlProvider({ children }: TIntlProvider) {
  const [state, dispatch] = useReducer(IntlReducer, intlInitialState);

  async function findLocale() {
    const localeStorage = await localStorageManager.getItem(localStorageKeys.LOCALE);

    if (localeStorage) {
      const locale = localeStorage as ELocales;
      dispatch({ type: 'SWITCH_LANGUAGE', payload: locale });
      return;
    }

    const userLanguage = navigator.language;
    if (userLanguage) {
      const locale = userLanguage as ELocales;
      dispatch({ type: 'SWITCH_LANGUAGE', payload: locale });
      return;
    }
  }

  useEffect(() => {
    findLocale();
  }, []);

  async function changeLanguage(language: ELocales): Promise<void> {
    await localStorageManager.setItem(localStorageKeys.LOCALE, language);
    dispatch({ payload: language, type: 'SWITCH_LANGUAGE' });
  }

  return (
    <IntlContext.Provider value={{ state, dispatch: dispatch, changeLanguage: changeLanguage }}>
      <ReactIntlProvider
        key={state.locale}
        locale={state.locale}
        messages={state.messages}
        defaultLocale='en'
      >
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  );
}

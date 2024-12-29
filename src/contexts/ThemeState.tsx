import { createContext, useReducer } from 'react';
import { ThemeProvider as StyledTheme } from 'styled-components';

import { TTheme } from '../definitions/types/ContextTheme';
import { dark } from '../themes/dark';
import { DEFAULT } from '../themes/default';

import { themeReducer } from './reducers/themeReducer';

export type TThemeProvider = { children: React.ReactNode };

export const ThemeContext = createContext<TTheme>(dark);

export function ThemeProvider({ children }: TThemeProvider) {
  const [state] = useReducer(themeReducer, DEFAULT);
  return (
    <ThemeContext.Provider value={state}>
      <StyledTheme theme={state}>{children}</StyledTheme>
    </ThemeContext.Provider>
  );
}

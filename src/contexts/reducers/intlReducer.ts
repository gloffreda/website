import { ELocales } from '../../definitions/enums/ContextLocale';
import { IReducerAction } from '../../definitions/interfaces/Reducer';
import { TLocales } from '../../definitions/types/ContextLocale';
import enUS from '../../locales/en-US';
import ptBR from '../../locales/pt-BR';

export const LANGUAGES = {
  // Portuguese variations
  pt: ELocales.PORTUGUESE,
  'pt-pt': ELocales.PORTUGUESE,
  'pt-br': ELocales.PORTUGUESE,

  // English variations
  en: ELocales.ENGLISH,
  'en-us': ELocales.ENGLISH,
  'en-uk': ELocales.ENGLISH,
  'en-au': ELocales.ENGLISH,
};

const LOCALES: TLocales = {
  en: { ...enUS },
  pt: { ...ptBR },
};

export const intlInitialState = {
  locale: ELocales.ENGLISH,
  messages: LOCALES[ELocales.ENGLISH],
};

export function IntlReducer(state: typeof intlInitialState, action: IReducerAction<unknown, keyof TLocales>) {
  switch (action.type) {
    case 'SWITCH_LANGUAGE': {
      const language = LOCALES[action.payload] ?? LOCALES.en;
      return { locale: action.payload, messages: language };
    }
    default:
      return state;
  }
}

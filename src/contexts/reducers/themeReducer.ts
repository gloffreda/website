import { IReducerAction } from '../../definitions/interfaces/Reducer';
import { TTheme } from '../../definitions/types/ContextTheme';

export function themeReducer(state: TTheme, action: IReducerAction) {
  switch (action.type) {
    default:
      return state;
  }
}

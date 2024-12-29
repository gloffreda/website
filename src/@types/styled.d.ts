import 'styled-components';
import { TTheme } from '../definitions/types/ContextTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/naming-convention
  export interface DefaultTheme extends TTheme {}
}

import { createContext, useState } from 'react';

import { CardRoot as MainCardRoot, TCardRootProps } from '../card/CardRoot';

export const CollapseCardContext = createContext<{ isOpen: boolean; toggleOpen: () => void }>({
  isOpen: true,
  toggleOpen: () => null,
});

export function CollapseCardRoot({
  children,
  isOpen: propsIsOpen,
  ...props
}: TCardRootProps & { isOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(propsIsOpen ?? true);
  return (
    <CollapseCardContext.Provider
      value={{
        isOpen,
        toggleOpen: () => setIsOpen(state => !state),
      }}
    >
      <MainCardRoot {...props}>{children}</MainCardRoot>
    </CollapseCardContext.Provider>
  );
}

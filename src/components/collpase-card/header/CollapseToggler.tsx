import { useContext } from 'react';

import { Button } from '../../Button';
import { CollapseCardContext } from '../CollapseCardRoot';

export function CollapseToggler() {
  const ctx = useContext(CollapseCardContext);
  return (
    <Button
      icon={{ icon: ctx.isOpen ? 'LuChevronUp' : 'LuChevronDown' }}
      size='sm'
      theme='light'
      button={{ onClick: ctx.toggleOpen }}
    />
  );
}

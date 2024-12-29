import { useContext } from 'react';

import { CardBody } from '../card/CardBody';
import { Collapse as MainCollapse } from '../Collapse';

import { CollapseCardContext } from './CollapseCardRoot';

export function Collapse({ children }: { children: React.ReactNode }) {
  const ctx = useContext(CollapseCardContext);
  return <MainCollapse isOpen={ctx.isOpen}>{children}</MainCollapse>;
}

export const CollapseCardBody = CardBody;

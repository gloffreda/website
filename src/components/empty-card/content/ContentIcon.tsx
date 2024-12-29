import React from 'react';

import { Icon } from '../../Icon';

type TContentIconProps = {
  icon: string;
};

export default function ContentIcon({ icon }: TContentIconProps) {
  return <Icon icon={icon} size={'xl'} />;
}

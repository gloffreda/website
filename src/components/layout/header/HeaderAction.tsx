import React from 'react';

import { TButtonColors } from '../../../definitions/types/ContextTheme';
import { Button } from '../../Button';

type THeaderActionProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  icon?: string;
  theme?: keyof TButtonColors;
  loading?: boolean;
};

export default function HeaderAction({ onClick, text, icon, theme, loading }: THeaderActionProps) {
  return (
    <Button
      theme={theme}
      loading={loading}
      button={{ onClick }}
      label={text ? { text: text } : undefined}
      icon={{ icon: icon ?? 'LuPlus' }}
    />
  );
}

import React from 'react';

import { TButtonColors } from '../../definitions/types/ContextTheme';
import { Button } from '../Button';

type TCardActionProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  icon?: string;
  theme?: keyof TButtonColors;
};

export default function CardAction({ onClick, text, icon, theme }: TCardActionProps) {
  return (
    <Button
      theme={theme}
      button={{
        className: 'my-auto px-0',
        onClick: onClick,
        style: { padding: '10px', marginTop: '1rem' },
      }}
      label={text ? { text: text } : undefined}
      icon={icon ? { icon: icon } : undefined}
    />
  );
}

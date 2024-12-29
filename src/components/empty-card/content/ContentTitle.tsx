import React from 'react';

import { Label } from '../../Typography';

type TContentTitle = {
  text: string;
  isName?: boolean;
};

export default function ContentTitle({ text, isName }: TContentTitle) {
  return <Label text={text} size='xl' className='block' isName={isName} />;
}

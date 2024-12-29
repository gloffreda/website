import React from 'react';

type TCardRootProps = {
  children: React.ReactNode;
};

export default function CardRoot({ children }: TCardRootProps) {
  return <div className='p-6 flex justify-center items-center'>{children}</div>;
}

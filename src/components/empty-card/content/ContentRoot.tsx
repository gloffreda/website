import React from 'react';
type TContentRootProps = {
  children: React.ReactNode;
};
export default function ContentRoot({ children }: TContentRootProps) {
  return <div className='flex flex-col items-center'>{children}</div>;
}

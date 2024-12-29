import React, { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

type TCollapseProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export function Collapse({ children, isOpen }: TCollapseProps) {
  const [childHeight, setChildHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref?.current) return;
    const resizeObserver = new ResizeObserver(() => setChildHeight(ref.current?.clientHeight ?? 0));
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref]);

  return (
    <Transition in={isOpen} nodeRef={ref} timeout={300}>
      {state => (
        <div style={{ ...defaultStyle, ...collapseStyle(state, childHeight) }}>
          <div ref={ref}>{children}</div>
        </div>
      )}
    </Transition>
  );
}
const collapseStyle = (state: string, height: number): React.CSSProperties => {
  const states: { [key: string]: React.CSSProperties } = {
    entering: { height: `${height}px`, overflow: 'hidden' },
    entered: { height: `${height}px` },
    exiting: { height: 0, overflow: 'hidden' },
    exited: { height: 0, overflow: 'hidden' },
  };

  return states[state];
};

const defaultStyle = {
  transition: 'all .3s cubic-bezier(.07,.95,0,1)',
  opacity: 1,
};

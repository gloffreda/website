import { useEffect, useState } from 'react';

export function WindowSize(size: string) {
  const [isSizeMatch, setIsSizeMatch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsSizeMatch(innerWidth >= parseInt(size.replace(/\D/g, '')));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);

  return isSizeMatch;
}

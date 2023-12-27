import { useEffect, useState } from 'react';

export default function useWindowResize() {
  const [width, setWidth] = useState<number>(document.body.clientWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.body.clientWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

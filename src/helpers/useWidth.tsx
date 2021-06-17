import { useEffect, useState } from 'react';

type widthType = {
  currWidth: number,
  prevWidth: number
}

const getWidth = () => window.innerWidth;

const useWidth = () => {
  const [width, setWidth] = useState<widthType>({ currWidth: getWidth(), prevWidth: getWidth() });

  useEffect(() => {
    let timeout: any = null;

    const resizeListener = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWidth((prev) => { return { currWidth: getWidth(), prevWidth: prev.currWidth } });
      }, 100);
    }

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}

export default useWidth;
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      const xl2 = 1536;
      const xl = 1280;
      const lg = 1024;

      if (window.innerWidth < lg) {
        setWidth(500);
      } else if (window.innerWidth < xl) {
        setWidth(500);
      } else if (window.innerWidth < xl2) {
        setWidth(600);
      } else {
        setWidth(600);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;

import { useState, useEffect } from 'react';
export function useWindowWidth() {
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

export function createImage(image_source, width=20, height=20){
  const image = new Image();
  image.src = image_source;
  image.width = width;
  image.height = height;
  return image;
}

export function getBestData(title, key, img_url, data_name, data_value1, data_value2){
  return {
    title: title,
    key: key,
    img_url: img_url,
    data_name: data_name,
    data_value1: data_value1,
    data_value2: data_value2
    }
  }

export function getUefaLeaguesRanking(id, data){
  return {
    id: id,
    data: data
  }
}
import { useState, useEffect } from 'react';
import { FILTER } from '../../data/Constants';
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

export function updateSeasonFilter(prev_filters, insertedSeason){
  const updated_filters = [...prev_filters]
  const selected_season_index = updated_filters.findIndex(filter => filter.name === FILTER.SEASON)

  if (selected_season_index !== -1){
    if(insertedSeason.includes('TOTAL')) {
      updated_filters[selected_season_index].state = false
    }
    else {
      updated_filters[selected_season_index].state = true
    }
  }
  return updated_filters;
}

export function activateInputFilter(prev_filters,input){
  const updated_filters = [...prev_filters]
  const selected_input_index = updated_filters.findIndex(filter => filter.name === FILTER.INPUT)

  if (selected_input_index !== -1){
      updated_filters[selected_input_index].state = true
  }

  return updated_filters;
}

export function deactivateInputFilter(prev_filters,input){
  const updated_filters = [...prev_filters]
  const selected_input_index = updated_filters.findIndex(filter => filter.name === FILTER.INPUT)

  if (selected_input_index !== -1){
      updated_filters[selected_input_index].state = false
  }
  return updated_filters;
}

export function isFilterActivated(filters) {
  const activated_filters = filters.filter(filter => filter.state === true)
  return activated_filters.length > 0
}
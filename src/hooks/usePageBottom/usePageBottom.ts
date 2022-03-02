// usePageBottom

import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';

const usePageBottom = (func: any) => {
  const [reachedBottom, setReachedBottom] = useState(false);
  
  // event handler for determining if the user reached bottom
  const handleScroll = useMemo(() => {
    return throttle(() => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      // if current scroll from bottom is less than equal to 10px
      const reachingBottom = offsetHeight - (innerHeight + scrollTop) <= 10;
      setReachedBottom(reachingBottom);
      if(reachingBottom) func()
    }, 1000);
  }, []);

  // effect for binding event listener on window scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return reachedBottom;
}

export default usePageBottom
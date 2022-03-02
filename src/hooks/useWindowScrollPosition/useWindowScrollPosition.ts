import { useEffect, useState } from "react";
import { throttle } from 'lodash';

const useWindowScrollPosition = (options: any = {}) => {
    const { throttleMs = 100 } = options;
    const [scroll, setScroll] = useState({
      x: window.pageXOffset,
      y: window.pageYOffset
    });
  
    const handle = throttle(() => {
      setScroll({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    }, throttleMs);
  
    useEffect(() => {
      window.addEventListener("scroll", handle);
  
      return () => {
        window.removeEventListener("scroll", handle);
      };
    }, []);
  
    return scroll;
};

export default useWindowScrollPosition;
  
// usePrevious

import { useEffect, useRef } from 'react';

const usePrevious = (value: any) => {
  const ref = useRef();

  // store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // return previous value (happens before update in useEffect above)
  return ref.current;
};

export default usePrevious;

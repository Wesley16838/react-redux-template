// Ex.
// const [show, toggleShow] = useToggle();
// <Modal show={show} onClose={toggleShow}/>
import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState<any>(initialValue);
  
  const toggle = useCallback(() => {
    setState((state: any) => !state);
  }, []);
  
  return [state, toggle];
};

export default useToggle;
import { useState } from 'react';
import usePrevious from './usePrevious';

const Example = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Example

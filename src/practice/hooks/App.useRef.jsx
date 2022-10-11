import React, { useRef, useState } from 'react';

export default function App() {
  let [count, setCount] = useState(0);
  // ~ 通过useRef也可以实现缓存
  let myCount = useRef(0);
  const changeCount = () => {
    setCount(count + 1);
    myCount.current++;
  };
  return (
    <div>
      <h3>{count}</h3>
      <h3>{myCount.current}</h3>
      <button onClick={() => changeCount()}>++</button>
    </div>
  );
}

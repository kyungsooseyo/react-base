import React, { useState } from 'react'
import TestChild from './TestChild.jsx'
export default function Test() {
  console.log('test render');
  const [obj, setObj] = useState({
    a: {
      b: 1,
    },
  })
  const [arr, setArr] = useState([1, 2, 3])
  const handleClick = () => {
    setObj({
      a: {
        b: 2,
      },
    })
    // setArr([4, 5, 6]) 
    console.log('obj', obj)
    console.log('arr', arr)
  }
  return (
    <div>
      Test
      <TestChild obj={obj} arr={arr}></TestChild>
      <button onClick={handleClick}>change</button>
    </div>
  )
}

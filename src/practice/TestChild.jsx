import React, { useEffect } from 'react'

export default function TestChild(props) {
  // ! 如果不依赖props，那么只会在第一次渲染时useEffect执行，在props改变时useEffect不会执行，这和vue不一样;最好在精确到某个属性，因为只有传入进来的obj变了，arr没变,useEffect才会执行
  useEffect(() => {
    console.log('TestChild', props);
    return () => {
    }
  }, [props.obj])

  return (
    <div>TestChild</div>
  )
}

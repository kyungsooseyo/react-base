import React from 'react'
import { useEffect } from 'react'
function NotFound(props) {
  useEffect(() => {
    console.log('🚀 ~ file: Connect.jsx ~ line 4 ~ NotFound ~ props', props)
  }, [])
  return <div>NotFound</div>
}
//· 自定义connect
function OwnConnect(cb, obj) {
  const value = cb()
  return (MyComponent) => {
    return (props) => {
      // ~ 这个props是原来的默认props 包括路由的那些
      return (
        <div style={{ color: 'salmon' }}>
          <MyComponent {...value} {...props} {...obj} />
        </div>
      )
    }
  } 
}
export default OwnConnect(
  () => {
    return {
      a: 1,
      b: 2,
    }
  },
  {
    handle1() {},
    handle2() {},
  }
)(NotFound)

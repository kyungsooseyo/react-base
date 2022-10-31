import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Child from './Child'
function Index(props) {
  useEffect(() => {
    console.log('🚀 ~ file: Index.jsx ~ line 5 ~ Index ~ props', props)
  }, [])
  return (
    <div>
      Index
      <p>{props.age}</p>
      <p>{props.state.obj.name}</p>
      <Child />
    </div>
  )
}
export default connect((state) => {
  return {
    state,
    age: 12,
  }
})(Index)

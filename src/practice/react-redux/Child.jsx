import React, { useEffect } from 'react'
import { connect } from 'react-redux'
function Child(props) {
  useEffect(() => {
    console.log('🚀 ~ file: Child.jsx ~ line 5 ~ Child ~ props', props)
  }, [])
  const handleClick = () => {
    props.handleDispatch()
  }
  return (
    <div>
      --------------------------------------<br></br> Child
      <p>child---{props.state.obj.name}</p>
      <p>child---{props.state.obj.sex}</p>
      <button onClick={() => handleClick()}>child dispatch</button>
    </div>
  )
}
//~ 第一个参数将来要给孩子传递的属性，第二个参数是dispatch
const mapStateToProps = (state) => {
  return {
    state,
  }
}
const mapDispatchToProps = {
  //~ 传递给孩子的方法
  handleDispatch() {
    console.log('dispatch 调用')
    return {
      type: 'changeName',
      value: 'child dispatch',
    }
  }, 
}
export default connect(mapStateToProps, mapDispatchToProps)(Child)

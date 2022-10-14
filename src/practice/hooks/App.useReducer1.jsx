import React, { useReducer } from 'react'

export default function App() {
  const initialState = {
    count: 0,
  }
  function reducer(prevState, action) {
    switch (action.type1) {
      case 'Add':
        return { count: prevState.count + action.payload1 }
      case 'Sub':
        return { count: prevState.count - 1 }
      default:
        return prevState
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleAdd = () => {
    dispatch({
      // ~这个key不是type也能跑的通,但是不符合规范,payload也可以改成其他的key
      type1: 'Add',
      payload1: 2,
    })
  }
  const handleSub = () => {
    dispatch({
      type1: 'Sub',
    })
  }
  return (
    <div>
      <h3>useReducer</h3>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'space-around',
        }}
      >
        <button onClick={() => handleSub()}>-</button>
        <p>{state.count}</p>
        <button onClick={() => handleAdd()}>+</button>
      </div>
    </div>
  )
}

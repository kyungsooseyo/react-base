import React, { useReducer, useContext } from 'react'
const initialState = {
  a: 1,
  b: 2,
}
const GlobalContext = React.createContext()
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_A':
      return { ...prevState, a: prevState.a + 1 }
    case 'CHANGE_B':
      return { ...prevState, b: prevState.b + 1 }
    default:
      break
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    // ~ es6简写，所以用双括号
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div>
        <h3>App.useReducer2</h3>
        <div>
          <Child1></Child1>
          <Child2></Child2>
          <Child3></Child3>
        </div>
      </div>
    </GlobalContext.Provider>
  )
}
const Child1 = () => {
  const { state, dispatch } = useContext(GlobalContext)
  return (
    <div style={{ backgroundColor: 'yellowgreen' }}>
      Child1
      <div>
        <button onClick={() => dispatch({ type: 'CHANGE_A' })}>change a</button>
        <button onClick={() => dispatch({ type: 'CHANGE_B' })}>change b</button>
      </div>
    </div>
  )
}
function Child2() {
  const { state, dispatch } = useContext(GlobalContext)
  return (
    <div style={{ backgroundColor: 'pink' }}>
      Child2
      <p>{state.a}</p>
    </div>
  )
}
function Child3() {
  const { state, dispatch } = useContext(GlobalContext)
  return (
    <div style={{ backgroundColor: 'skyblue' }}>
      Child3
      <p>{state.b}</p>
    </div>
  )
}

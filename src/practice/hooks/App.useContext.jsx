import React, { useContext } from 'react'
const GlobalContext = React.createContext()
export default function App() {
  return (
    <div>
      App.useContext
      <GlobalContext.Provider value={{ name: 'asd', age: 12 }}>
        <Child />
      </GlobalContext.Provider>
    </div>
  )
}

function Child() {
  const context = useContext(GlobalContext)
  console.log(
    '🚀 ~ file: App.useContext.jsx ~ line 16 ~ Child ~ context',
    context
  )
  const handleClick = (v) => {
    console.log('🚀 ~ file: App.useContext.jsx ~ line 21 ~ handleClick ~ v', v)
  }
  return (
    <div>
      child
      <GrandSon handleClick={(value) => handleClick(value)}></GrandSon>
    </div>
  )
}
function GrandSon(props) {
  const grandSonContext = useContext(GlobalContext)
  console.log(
    '🚀 ~ file: App.useContext.jsx ~ line 30 ~ GrandSon ~ grandSonContext',
    grandSonContext
  )
  const handleDelivery = () => {
    //~ 提前在父亲组件中定义好函数，然后传递给子组件，子组件调用,在子组件中把数据传递给父组件，父组件会自动执行handleClick
    props.handleClick('delivery')
  }
  return (
    <div>
      grandSon
      <button onClick={handleDelivery}>delivery to parent</button>
    </div>
  )
}

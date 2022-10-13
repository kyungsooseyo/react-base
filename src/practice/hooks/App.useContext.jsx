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

  return (
    <div>
      child
      <GrandSon></GrandSon>
    </div>
  )
}
function GrandSon(params) {
  const grandSonContext = useContext(GlobalContext)
  console.log(
    '🚀 ~ file: App.useContext.jsx ~ line 30 ~ GrandSon ~ grandSonContext',
    grandSonContext
  )
  return <div>grandSon</div>
}

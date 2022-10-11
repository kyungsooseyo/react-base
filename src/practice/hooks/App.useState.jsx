import React, { useState } from 'react'

export default function App() {
  console.log('app render')
  const [text, setText] = useState('')
  const [list, setList] = useState(['a', 'b', 'c'])
  const handleDel = (i) => {
    setList(list.filter((_, index) => index !== i))
  }
  return (
    <div>
      <input
        type='text'
        onChange={(evt) => {
          setText(evt.target.value)
        }}
      />
      <button
        onClick={() => {
          console.log(text)
          setList([...list, text])
        }}
      >
        +
      </button>
      {list.map((item, index) => {
        return (
          <div key={index}>
            {item}
            <button onClick={() => handleDel(index)}>del</button>
          </div>
        )
      })}
      {list.length == 0 && <h2>暂无事项</h2>}
    </div>
  )
}

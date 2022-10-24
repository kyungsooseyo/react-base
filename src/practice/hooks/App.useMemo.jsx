import React, { useMemo, useState } from 'react'

export default function App() {
  const [name, setName] = useState(['a', 'b', 'c', 'aa'])
  const [text, setText] = useState('')
  const filterList = useMemo(() => {
    return name.filter((item) => item.includes(text))
  }, [name, text])
  // if (useMemo(() => 1, []) === 2) {
  //   console.log('qq')
  // }
  return (
    <div>
      App.useMemo
      <input
        style={{color:''}}
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <ul>
        {filterList.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

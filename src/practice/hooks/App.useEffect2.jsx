import React, { useState, useEffect } from 'react'

export default function App() {
  const [name, setName] = useState('asd')
  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    return () => {
      //? 更改的时候会调用两次
      console.log('return')
    }
  }, [name])

  return (
    <div>
      App.useEffect2
      <h3>{name}</h3>
      <button
        onClick={() => {
          setName('xiaoming')
        }}
      >
        change
      </button>
    </div>
  )
}

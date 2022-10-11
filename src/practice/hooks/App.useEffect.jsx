import React, { useEffect, useState } from 'react'
import http from '../../utils/request'
export default function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    http().then((res) => {
      console.log('res', res.data.data)
      setList(res.data.data.films)
    })
  }, [])
  return (
    <div>
      App.useEffect
      <ul>
        {list.map((item, index) => {
          return <li key={item.filmId}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

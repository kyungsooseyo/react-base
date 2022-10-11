import React, { useMemo } from 'react'

export default function App() {
  if (useMemo(() => 1, []) === 2) {
    console.log('qq')
  }
  return <div>App.useMemo</div>
}

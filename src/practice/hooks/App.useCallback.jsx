import React, { useCallback, useState, useMemo } from 'react'
// ~useCallback：每次调useState中的set方法，就会重新执行App 里面声明的函数也就重新执行，
//~ 如果不想重新执行，就用useCallback，这样就不会重新执行，而是会缓存，
//~ 只有当useCallback的参数发生变化的时候，才会重新执行，

// useMemo：只有当useMemo的参数发生变化的时候，才会重新执行，
// useMemo和useCallback的区别：
// useMemo是在渲染的时候执行，useCallback是在每次更新的时候执行
//
// !主要区别是 React.useMemo 将调用 fn 函数并返回其结果，而 React.useCallback 将返回 fn 函数而不调用它。
export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState(['a', 'b', 'c'])
  // const handleChange = useMemo(
  //   () => (value) => {
  //     setText(value);
  //   },
  //   []
  // );
  const handleChange = useCallback((value) => {
    setText(value)
  }, [])
  const handleDel = (index) => {
    setList(list.filter((_, i) => i !== index))
  }
  const handleAdd = useCallback(() => {
    setList([...list, text])
    setText('')
  }, [text, list])

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(evt) => handleChange(evt.target.value)}
      />
      <button
        onClick={() => {
          handleAdd()
        }}
      >
        +1
      </button>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item}
              {/* <button onClick={handleDel.bind(null, index)}>del</button> */}
              <button onClick={() => handleDel(index)}>del</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

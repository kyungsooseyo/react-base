import { createStore } from 'redux'
const initialState = {
  obj: {
    name: 'John',
    sex: 'male'
  }
}
const reducer = (prevState = initialState, action) => {
  console.log('action', action);
  const temp = { ...prevState }
  switch (action.type) {
    case 'changeName':
      console.log('temp', temp);
      temp.obj.name = action.value
      return temp
      break;
    default:
      return prevState
      break;
  }
}
const store = createStore(reducer)
export default store
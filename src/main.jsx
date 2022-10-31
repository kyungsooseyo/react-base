import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
// import axios from './utils/request'
// import vconsole from 'vconsole';
// new vconsole();
// import App from './App'
// import App from './practice/router/1';
// import App from './practice/Test.jsx'
import App from './practice/react-redux/Connect.jsx'
ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
)

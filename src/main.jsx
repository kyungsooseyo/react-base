import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
// import vconsole from 'vconsole';
// new vconsole();
// import App from './App'
// import App from './practice/router/1';
// import App from './practice/Test.jsx'
import App from './practice/hooks/App.useState';
ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);
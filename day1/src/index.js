import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cart from './component/Cart';
import reportWebVitals from './reportWebVitals';
import SearchApp from './component/SearchApp';
import FreshApp from './component/FreshApp';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <SearchApp /> */}
    {/* <App/>  */}
    <FreshApp></FreshApp>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

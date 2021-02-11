import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
// import './fonts/GT-Sectra-Book.ttf'
// import './fonts/GT-Sectra-Medium.ttf'
// import './fonts/GT-Walsheim-Regular.ttf'
// import './fonts/GT-Walsheim-Thin.ttf'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    
    
      <App />
   
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

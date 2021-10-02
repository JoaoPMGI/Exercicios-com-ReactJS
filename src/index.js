import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App01 from './Exercicios';
import App02 from './Exercicios';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App02 />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import React from 'react';

const redirectToHash = () => {
  if (window.location.pathname === '/portfolio/') {
    window.location.replace('/portfolio/#/');
  }
};

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

redirectToHash();

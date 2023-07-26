import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import React from 'react';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='portfolio'>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

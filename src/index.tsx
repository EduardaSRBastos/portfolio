import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import './index.css';

const routes = [
  {
    path: "/*",
    element: <App />,
  }
];

ReactDOM.render(
  <BrowserRouter basename='portfolio'>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

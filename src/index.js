import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './containers/Login/login';
import Products from './containers/Products/products';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Login /> */}
   <Products />
  </React.StrictMode>
);


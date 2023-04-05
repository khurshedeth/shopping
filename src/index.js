import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './PageContext/ProductContext';
import SideBarProvider from './PageContext/SidebarContext';
import CartProvider from './PageContext/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<SideBarProvider>
<CartProvider>
  <ProductProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SideBarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

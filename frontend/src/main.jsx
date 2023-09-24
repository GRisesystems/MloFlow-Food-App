import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './Context/CartContext.tsx'
import { DataProvider } from './Context/DataContext.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </CartProvider>
  </React.StrictMode>,
)

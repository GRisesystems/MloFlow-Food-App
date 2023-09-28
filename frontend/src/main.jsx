import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './App.jsx'
import './index.css'

import { CartProvider } from './context/Cart.jsx';
import { AuthProvider } from 'react-auth-kit'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      // cookieSecure={window.location.protocol === "https:"}
      cookieSecure

    >
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { AuthProvider } from './hooks/auth'
import { FavoritesProvider } from './hooks/favorites'
import { CartProvider } from './hooks/cart'
import { AppRoutes } from './routes/AppRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <AppRoutes />
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
    <ToastContainer theme="dark" limit={5} autoClose={2000} />
  </React.StrictMode>
)

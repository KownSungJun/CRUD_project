import React from 'react'
import ReactDom from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.js'
ReactDom.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
)

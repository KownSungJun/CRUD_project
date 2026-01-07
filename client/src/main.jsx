import React from 'react'
import ReactDom from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { AuthProvider } from './contexts/AuthContext'
import store from './store'
// const store = legacy_createStore(rootReducer, composeWithDevTools)
ReactDom.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </Provider>

)

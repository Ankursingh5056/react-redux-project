import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux"
import store from './Cmp/redux/Store.js'
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <PersistGate persistor ={persistStore(store)}>
    <App />
  </PersistGate>
  </BrowserRouter>,
  </Provider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { legacy_createStore as createStore } from 'redux';
import{Provider} from 'react-redux';
import rootReducer from './Services/Reducers/index.jsx'

import './index.css'
const store = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

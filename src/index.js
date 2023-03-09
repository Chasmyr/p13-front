import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import './assets/style/global.css'
import { configureStore } from '@reduxjs/toolkit';
import {reducer as loginReducer} from "./slices/login/loginSlice"
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    loginReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// REDUX
import { createStore } from 'redux';
//import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import allReducers from './reducers';

const store = createStore(
  allReducers
)

export type RootState = ReturnType<typeof store.getState>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);



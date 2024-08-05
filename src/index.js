import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// import { todoApi } from './features/api/apiSlice';
import {store} from './store'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
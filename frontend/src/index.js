import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./bootstrap.min.css";
import store from './store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('roott'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


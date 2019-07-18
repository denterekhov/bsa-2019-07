import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './init/store';
import { history } from './init/middleware';
import './index.css';
import App from './navigation/App';

render(
  <Provider store = { store }>
    <BrowserRouter history = { history }>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

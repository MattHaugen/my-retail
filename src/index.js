import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import productDetailApp from './reducers';
import { getItem } from './actions';
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];
const store = createStore(productDetailApp, applyMiddleware(...middleware));

store.dispatch(getItem(1234));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

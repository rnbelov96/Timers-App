import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import App from './App';
import 'bootstrap/scss/bootstrap.scss';

const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log(store.getState());
  return result;
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

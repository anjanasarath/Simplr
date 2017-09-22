import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import styles from './index.css';
import combReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(combReducers)

ReactDom.render(<Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

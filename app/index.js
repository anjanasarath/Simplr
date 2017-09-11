import React from 'react';
import ReactDom from 'react-dom';
import createStore from 'redux';
import { Provider } from 'react-redux';
import Reducer_all from '';
import App from './components/App';

const store = createStore(store);

ReactDom.render(
  <Provider store= { store }>
  <App/>
  </Provider>,document.getElementById('app')
);

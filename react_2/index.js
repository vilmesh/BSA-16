import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import List from './components/List';

const store = createStore(reducer);

render(
  (<Provider store={store}>
      <List />
  </Provider>),
  document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';

// Actions
import configureStore from 'store';

// Components
import Root from 'components/root'

// Plugins
import isEmpty from 'lodash/isEmpty';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  
  if (isEmpty(window.currentAccount)) {
    store = configureStore();
  } else {
    const initialState = { session: { currentAccount: window.currentAccount } };
    store = configureStore(initialState);
  }
  
  window.Store = store;
  
  ReactDOM.render(<Root store={ store } />, root)
});
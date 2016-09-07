import React from 'react';
import ReactDOM from 'react-dom';

// Actions
import configureStore from 'store';

// Components
import Root from 'components/root'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  
  if (window.currentAccount) {
    const initialState = { session: { currentAccount: window.currentAccount } };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  
  window.Store = store;
  
  ReactDOM.render(<Root store={ store } />, root)
});
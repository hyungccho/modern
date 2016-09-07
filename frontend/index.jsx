import React from 'react';
import ReactDOM from 'react-dom';

// Actions
import configureStore from 'store';

// Components
import Root from 'components/root'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  
  if (window.currentUser) {
    const initialState = { session: { currentUser: window.currentUser } };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  
  window.Store = store;
  
  ReactDOM.render(<Root store={ store } />, root)
});
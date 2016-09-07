import React from 'react';
import ReactDOM from 'react-dom';

// Actions
import configureStore from 'store';

// Components
import Root from 'components/root'


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  window.Store = store;
  
  ReactDOM.render(<Root store={ store } />, root)
});
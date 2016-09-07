import React from 'react';
import ReactDOM from 'react-dom';

// Actions
import configureStore from './store';

// Components
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store} />, root)
});
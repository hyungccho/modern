import React from 'react';

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from 'components/app';
import Hero from 'components/hero/hero';
import SessionContainer from 'components/session/session_container';
import HomeContainer from 'components/app/home/home_container';

// Plugins
import isEmpty from 'lodash/isEmpty';

class AppRouter extends React.Component {
  constructor (props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    
    this.routes = {
      path: '/',
      component: App,
      indexRoute: {
        component: Hero,
        onEnter: this._redirectIfLoggedIn
      },
      childRoutes: [
        { path: 'login', component: SessionContainer, onEnter: this._redirectIfLoggedIn },
        { path: 'signup', component: SessionContainer, onEnter: this._redirectIfLoggedIn },
        { path: 'home', component: HomeContainer, onEnter: this._ensureLoggedIn }
      ]
    };
  }
  
  _isLoggedIn () {
    const currentAccount = this.props.currentAccount;
    return (!isEmpty(currentAccount));
  }

  _ensureLoggedIn (nextState, replace) {
    if (!this._isLoggedIn()) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn (nextState, replace) {
    if (this._isLoggedIn()) {
      replace('/home');
    }
  }

  render () {
    return(
      <Router history={ browserHistory }>
        { this.routes }
      </Router>
    );
  }
}

export default AppRouter;
import React from 'react';

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from 'components/app';
import Home from 'components/home/home';
import SessionContainer from 'components/home/session/session_container';
import Dashboard from 'components/app/dashboard';

class AppRouter extends React.Component {
  constructor (props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._isLoggedIn = this._isLoggedIn.bind(this);
  }
  
  _isLoggedIn (nextState, replace) {
    const currentAccount = this.props.currentAccount;
    return (!!currentAccount);
  }

  _ensureLoggedIn (nextState, replace) {
    if (!this._isLoggedIn) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn (nextState, replace) {
    if (this._isLoggedIn) {
      replace('/dashboard');
    }
  }

  render () {
    return(
      <Router history={ browserHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Home } onEnter={ this._redirectIfLoggedIn } />
          
          // Session Routes
          <Route path='/login' component={ SessionContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path='/signup' component={ SessionContainer } onEnter={ this._redirectIfLoggedIn } />
          
          // Dashboard Routes
          <Route path='/dashboard' component={ Dashboard } onEnter={ this._ensureLoggedin } />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
import React from 'react';

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from 'components/app';
import Hero from 'components/home/hero';
import SessionContainer from 'components/home/session/session_container';
import HomeContainer from 'components/app/home_container';

class AppRouter extends React.Component {
  constructor (props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }
  
  _isLoggedIn () {
    const currentAccount = this.props.currentAccount;
    return (!!currentAccount);
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
        <Route path='/' component={ App }>
          <IndexRoute component={ Hero } onEnter={ this._redirectIfLoggedIn } />
          
          // Session Routes
          <Route path='/login' component={ SessionContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path='/signup' component={ SessionContainer } onEnter={ this._redirectIfLoggedIn } />
          
          // Dashboard Routes
          <Route path='/home' component={ HomeContainer } onEnter={ this._ensureLoggedin } />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
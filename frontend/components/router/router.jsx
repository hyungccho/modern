import React from 'react';

// Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Components
import App from 'components/app';
import Home from 'components/home/home';
import SessionContainer from 'components/home/session/session_container'

class AppRouter extends React.Component {
  constructor (props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn (nextState, replace) {
    const currentAccount = this.props.currentAccount;
    if (!currentAccount) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn (nextState, replace) {
    const currentAccount = this.props.currentAccount;
    if (currentAccount) {
      replace('/');
    }
  }

  render () {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
          <Route path="/login"
            component={ SessionContainer }
            onEnter={ this._redirectIfLoggedIn }
          />
        
          <Route path="/signup"
            component={ SessionContainer }
            onEnter={ this._redirectIfLoggedIn }
          />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
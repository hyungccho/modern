import { browserHistory } from 'react-router';

// Actions
import { receiveCurrentAccount,
         receiveErrors,
         SessionConstants
       } from 'actions/session/session_actions';

// Utils
import { login, signup, logout } from 'utils/session/session_utils';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const successCallback = account => {
    dispatch(receiveCurrentAccount(account));
    browserHistory.push('/home');
  }
  
  const errorCallback = (xhr) => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  
  switch (action.type) {
    case SessionConstants.LOGIN:
      login(action.account, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => {
        next(action);
        browserHistory.push('/');
      });
      break;
    case SessionConstants.SIGNUP:
      signup(action.account, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  };
};

export default SessionMiddleware;
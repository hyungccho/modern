import { SessionConstants } from 'actions/session_actions';
import merge from 'lodash/merge';

const _nullAccount = Object.freeze({
  currentAccount: null,
  errors: []
});

const SessionReducer = function(state = _nullAccount, action) {
  switch(action.type) {
    case SessionConstants.RECEIVE_CURRENT_ACCOUNT:
      const currentAccount = action.currentAccount;
      return merge({}, _nullAccount, { currentAccount });
    case SessionConstants.LOGOUT:
      return merge({}, _nullAccount);
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullAccount, { errors });
    default:
      return state;
  }
};



export default SessionReducer;
import { SessionConstants } from 'actions/session/session_actions';
import merge from 'lodash/merge';

const _nullAccount = Object.freeze({
  currentAccount: null,
  errors: []
});

const SessionReducer = (state = _nullAccount, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_ACCOUNT:
      const currentAccount = action.account.response;
      return merge({}, state, { currentAccount });
    case SessionConstants.LOGOUT:
      return merge({}, state);
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};



export default SessionReducer;
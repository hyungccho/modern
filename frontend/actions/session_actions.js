export const SessionConstants = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  RECEIVE_CURRENT_ACCOUNT: 'RECEIVE_CURRENT_ACCOUNT',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};

export const logIn = (account) => ({
  type: SessionConstants.LOGIN,
  account
});

export const logOut = () => ({
  type: SessionConstants.LOGOUT
});

export const signUp = (account) => ({
  type: SessionConstants.SIGNUP,
  account
});

export const receiveCurrentAccount = (account) => ({
  type: SessionConstants.RECEIVE_CURRENT_ACCOUNT,
  account
});

export const receiveErrors = (errors) => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
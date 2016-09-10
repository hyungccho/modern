import { connect } from 'react-redux';
import SessionForm from 'components/home/session/session_form';
import { login, logout, signup } from 'actions/session/session_actions';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentAccount),
  errors: state.session.errors ? state.session.errors : []
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return ({
    processForm: (account) => dispatch(processForm(account)),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
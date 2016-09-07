import { connect } from 'react-redux';
import AppRouter from 'router/router';

const mapStateToProps = state => ({
  currentAccount: state.session.currentUser
});

export default connect(
  mapStateToProps
)(AppRouter);
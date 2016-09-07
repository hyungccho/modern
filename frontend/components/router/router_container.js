import { connect } from 'react-redux';
import AppRouter from 'router/router';

const mapStateToProps = state => ({
  currentAccount: state.session.currentAccount
});

export default connect(
  mapStateToProps
)(AppRouter);
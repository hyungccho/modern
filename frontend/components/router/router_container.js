import { connect } from 'react-redux';

// Components
import AppRouter from 'components/router/router';

const mapStateToProps = state => ({
  currentAccount: state.session.currentAccount
});

export default connect(
  mapStateToProps
)(AppRouter);
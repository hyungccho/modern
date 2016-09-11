import { connect } from 'react-redux';

// Components
import Home from 'components/app/home';

// Actions
import { requestBusinesses } from 'actions/businesses/business_actions';
import { logout } from 'actions/session/session_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBusinesses: () => dispatch(requestBusinesses()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
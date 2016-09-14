import { connect } from 'react-redux';

// Components
import Home from 'components/app/home/home';

// Actions
import { requestBusinesses, createBusiness } from 'actions/businesses/business_actions';
import { logout } from 'actions/session/session_actions';

const mapStateToProps = state => ({
  businesses: state.business.businesses,
  currentAccount: state.session.currentAccount
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBusinesses: () => dispatch(requestBusinesses()),
  logout: () => dispatch(logout()),
  createBusiness: (business) => dispatch(createBusiness(business))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
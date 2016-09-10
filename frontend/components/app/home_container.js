import { connect } from 'react-redux';
import Home from 'components/app/home';
import { requestBusinesses } from 'actions/businesses/business_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBusinesses: () => dispatch(requestBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
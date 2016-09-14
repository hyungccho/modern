import { BusinessConstants } from 'actions/businesses/business_actions';
import merge from 'lodash/merge';

const _nullBusinesses = Object.freeze({
  businesses: [],
  business_errors: []
});

const BusinessReducer = (state = _nullBusinesses, action) => {
  switch (action.type) {
    case BusinessConstants.RECEIVE_BUSINESS:
      const newBusinesses = state.businesses.slice(0);
      newBusinesses.push(action.business.response);
      
      return merge({}, state, { businesses: newBusinesses });
    case BusinessConstants.RECEIVE_BUSINESSES:
      return merge({}, state, { businesses: action.businesses });
    default:
      return state;
  };
};

export default BusinessReducer;
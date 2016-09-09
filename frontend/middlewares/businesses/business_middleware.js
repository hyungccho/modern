import { BusinessConstants, receiveBusiness, receiveBusinessError } from 'actions/businesses/business_actions';
import { createBusiness } from 'utils/businesses/business_utils';

const BusinessMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case BusinessConstants.CREATE_BUSINESS:
      const createSuccess = (business) => dispatch(receiveBusiness(business));
      const createError = (error) => dispatch(receiveBusinessError(error));
    
      createBusiness(business, success, error)
      return next(action);
    default:
      return next(action);
  };
};

export default BusinessMiddleware;
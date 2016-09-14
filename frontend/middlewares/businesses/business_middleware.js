import { BusinessConstants,
         receiveBusiness,
         receiveBusinessError,
         receiveBusinesses
       } from 'actions/businesses/business_actions';
import { createBusiness,
         requestBusinesses,
       } from 'utils/businesses/business_utils';

const BusinessMiddleware = ({ getState, dispatch }) => next => action => {
  const accountId = (getState().session.currentAccount).id;
  
  switch (action.type) {
    case BusinessConstants.CREATE_BUSINESS:
      const createSuccess = (business) => dispatch(receiveBusiness(business));
      const createError = (error) => dispatch(receiveBusinessError(error));
    
      createBusiness(accountId, action.business, createSuccess, createError);
      return next(action);
    case BusinessConstants.REQUEST_BUSINESSES:
      const indexSuccess = (response) => dispatch(receiveBusinesses(response.response));
      const indexError = (error) => dispatch(receiveBusinessError(error));
      
      requestBusinesses(accountId, indexSuccess, indexError);
      return next(action)
    default:
      return next(action);
  };
};

export default BusinessMiddleware;
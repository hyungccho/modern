export const BusinessConstants = {
  REQUEST_BUSINESSES: 'REQUEST_BUSINESSES',
  RECEIVE_BUSINESS: 'RECEIVE_BUSINESS',
  RECEIVE_BUSINESSES: 'RECEIVE_BUSINESSES',
  CREATE_BUSINESS: 'CREATE_BUSINESS',
  UPDATE_BUSINESS: 'UPDATE_BUSINESS',
  DELETE_BUSINESS: 'DELETE_BUSINESS',
  RECEIVE_BUSINESS_ERRORS: 'RECEIVE_BUSINESS_ERRORS'
};

export const createBusiness = (business) => {
  action: BusinessConstants.CREATE_BUSINESS,
  business
};

export const receiveBusiness = (business) => {
  action: BusinessConstants.RECEIVE_BUSINESS,
  business
};
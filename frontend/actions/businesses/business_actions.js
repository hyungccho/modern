export const BusinessConstants = {
  REQUEST_BUSINESSES: 'REQUEST_BUSINESSES',
  RECEIVE_BUSINESS: 'RECEIVE_BUSINESS',
  RECEIVE_BUSINESSES: 'RECEIVE_BUSINESSES',
  CREATE_BUSINESS: 'CREATE_BUSINESS',
  UPDATE_BUSINESS: 'UPDATE_BUSINESS',
  DELETE_BUSINESS: 'DELETE_BUSINESS',
  RECEIVE_BUSINESS_ERRORS: 'RECEIVE_BUSINESS_ERRORS'
};

export const createBusiness = (business) => ({
  type: BusinessConstants.CREATE_BUSINESS,
  business
});

export const receiveBusiness = (business) => ({
  type: BusinessConstants.RECEIVE_BUSINESS,
  business
});

export const receiveBusinesses = (businesses) => ({
  type: BusinessConstants.RECEIVE_BUSINESSES,
  businesses
});

export const requestBusinesses = () => ({
  type: BusinessConstants.REQUEST_BUSINESSES
});
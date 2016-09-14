export const createBusiness = (accountId, business, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/v1/businesses',
    data: {
      business: business,
      account_id: accountId
    },
    success,
    error
  });
};

export const requestBusinesses = (accountId, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/v1/businesses',
    data: { account_id: accountId },
    success,
    error
  })
};
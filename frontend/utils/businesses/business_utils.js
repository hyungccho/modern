export const createBusiness = (business, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/v1/businesses',
    data: business,
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
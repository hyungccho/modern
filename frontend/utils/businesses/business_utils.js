export const createBusiness = (business, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/v1/businesses',
    data: business,
    success,
    error
  });
};
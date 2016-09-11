export const login = function (account, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/v1/session',
		data: account,
		success,
		error
	});
};

export const signup = function (account, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/v1/accounts',
		data: account,
		success,
		error
	});
};

export const logout = function (success) {
	$.ajax({
		method: 'DELETE',
		url: '/api/v1/session',
		success
	});
};
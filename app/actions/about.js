import fetch from 'isomorphic-fetch';

export const GET_ABOUT_REQUEST = 'GET_ABOUT_REQUEST';
export const GET_ABOUT_SUCCEED = 'GET_ABOUT_SUCCEED';
export const GET_ABOUT_FAILED = 'GET_ABOUT_FAILED';
export const CHANGE_START = 'CHANGE_START';

const fetchStateUrl = __SERVER__
	? `http://localhost:${require('../../platforms/common/config').port}/api/about`
	: '/api/about';

export function fetchAbout(state) {
	return (dispatch) => {
		dispatch(aboutRequest());
		return fetch(fetchStateUrl)
			.then(res => res.json())
			.then(data => {
				dispatch(aboutSucceed(data))
			})
			.catch(e => dispatch(aboutFailed(e)))
	}
}

export function changeStart(value) {
	return {
		type: CHANGE_START,
		value: value
	}
}

export function aboutRequest() {
	return {
		type: GET_ABOUT_REQUEST
	}
}
export function aboutSucceed(data) {
	return {
		type: GET_ABOUT_SUCCEED,
		data: data
	}
}
export function aboutFailed(error) {
	console.log('server state get failed', error);
	return {
		type: GET_ABOUT_FAILED,
		error
	}
}

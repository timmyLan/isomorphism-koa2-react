import {GET_ABOUT_FAILED, GET_ABOUT_SUCCEED, GET_ABOUT_REQUEST, CHANGE_START} from '../actions/about';

export default (state = {value: 3}, action) => {
	switch (action.type) {
		case GET_ABOUT_REQUEST:
			return {...state};
		case GET_ABOUT_SUCCEED:
			const _data = {
				about: action.data.result.about,
				loaded: true
			};
			return {...state, ..._data};
		case GET_ABOUT_FAILED:
			return {...state, loaded: false};
		case CHANGE_START:
			return {...state, value: action.value};
		default:
			return state
	}
}

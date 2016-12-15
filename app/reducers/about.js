import {GET_ABOUT_FAILED, GET_ABOUT_SUCCEED, GET_ABOUT_REQUEST, CHANGE_START, CHANGE_ABOUT} from '../actions/about';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_ABOUT_REQUEST:
			return {...state};
		case GET_ABOUT_SUCCEED:
			const _data = {
				about: action.data.result.about,
				value: action.data.result.value,
				loaded: true
			};
			return {...state, ..._data};
		case GET_ABOUT_FAILED:
			return {...state, loaded: false};
		case CHANGE_START:
			return {...state, value: action.value};
		case CHANGE_ABOUT:
			return {...state, about: action.data.result.about};
		default:
			return state
	}
}

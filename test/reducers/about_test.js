/**
 * Created by llan on 2016/12/26.
 */
import aboutReducers from '../../app/reducers/about';
import {
	GET_ABOUT_FAILED,
	GET_ABOUT_SUCCEED,
	GET_ABOUT_REQUEST,
	CHANGE_START,
	CHANGE_ABOUT
} from '../../app/actions/about';

describe('app/reducers/about', ()=> {
	let state;
	beforeEach(()=> {
		state = {};
	});
	it('Should return object.', ()=> {
		const action = {
			type: null
		};
		expect(typeof (aboutReducers(state, action))).to.equal('object');
	});
	describe('Should return state itself when action type is GET_ABOUT_REQUEST or no match', ()=> {
		it('GET_ABOUT_REQUEST', ()=> {
			const action = {
				type: GET_ABOUT_REQUEST
			};
			expect(aboutReducers(state, action)).to.deep.equal(state);
		});
		it('no match', ()=> {
			const action = {
				type: 'NO_MATCH'
			};
			expect(aboutReducers(state, action)).to.deep.equal(state);
		});
	});

	it('Should return custom object when action type is GET_ABOUT_SUCCEED', ()=> {
		const action = {
			type: GET_ABOUT_SUCCEED,
			data: {
				result: {
					about: 'it my custom about',
					value: 2
				}
			}
		};
		expect(aboutReducers(state, action)).to.deep.equal({...state, ...action.data.result, loaded: true});
	});
	it('PropTypes.loader should equal false when action type is GET_ABOUT_FAILED', ()=> {
		const action = {
			type: GET_ABOUT_FAILED
		};
		expect(aboutReducers(state, action).loaded).to.equal(false);
	});
	it('PropTypes.value should equal result.value when action type is CHANGE_START', ()=> {
		const action = {
			type: CHANGE_START,
			value: 2
		};
		expect(aboutReducers(state, action).value).to.equal(action.value);
	});
	it('PropTypes.about should equal result.about when action type is CHANGE_ABOUT', ()=> {
		const action = {
			type: CHANGE_ABOUT,
			data: {
				result: {
					about: 'it my custom about',
					value: 2
				}
			}
		};
		expect(aboutReducers(state, action).about).to.equal(action.data.result.about);
	});
});

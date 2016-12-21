/**
 * Created by llan on 2016/12/20.
 */
require('babel-polyfill');
import 'isomorphic-fetch';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Actions from '../../app/actions/about';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions/about', () => {
	let actions,
		dispatchSpy;

	beforeEach(function () {
		actions = [];
		dispatchSpy = sinon.spy(action => {
			actions.push(action)
		});
	});

	describe('export constant', ()=> {
		it('Should export a constant GET_ABOUT_REQUEST.', () => {
			expect(Actions.GET_ABOUT_REQUEST).to.equal('GET_ABOUT_REQUEST');
		});
		it('Should export a constant GET_ABOUT_SUCCEED.', () => {
			expect(Actions.GET_ABOUT_SUCCEED).to.equal('GET_ABOUT_SUCCEED');
		});
		it('Should export a constant GET_ABOUT_FAILED.', () => {
			expect(Actions.GET_ABOUT_FAILED).to.equal('GET_ABOUT_FAILED');
		});
		it('Should export a constant CHANGE_START.', () => {
			expect(Actions.CHANGE_START).to.equal('CHANGE_START');
		});
		it('Should export a constant GET_ABOUT_REQUEST.', () => {
			expect(Actions.CHANGE_ABOUT).to.equal('CHANGE_ABOUT');
		});
	});
	describe('action fetchAbout', ()=> {
		it('fetchAbout should be exported as a function.', () => {
			expect(Actions.fetchAbout).to.be.a('function')
		});
		it('fetchAbout should return a function (is a thunk).', () => {
			expect(Actions.fetchAbout()).to.be.a('function')
		});
	});
	describe('action changeStart', ()=> {
		it('changeStart should be exported as a function.', () => {
			expect(Actions.changeStart).to.be.a('function')
		});
		it('Should be return an action and return correct results', () => {
			const action = Actions.changeStart(5);
			expect(action).to.have.property('type', Actions.CHANGE_START);
			expect(action).to.have.property('value', 5);
		});
		it('Should be return an action with error while input empty value.', () => {
			const action = Actions.changeStart();
			expect(action).to.have.property('error').to.not.be.empty
		});
	});
	describe('action changeAbout', ()=> {
		it('changeAbout be exported as a function.', () => {
			expect(Actions.changeAbout).to.be.a('function')
		});
	});
	describe('async action', ()=> {
		it('Should done when fetch action aboutSucceed', async()=> {
			const data = {
				"code": 200,
				"msg": "ok",
				"result": {
					"value": 4,
					"about": "it's my about"
				}
			};
			// 期望的发起请求的 action
			const actRequest = {
				type: Actions.GET_ABOUT_REQUEST
			};
			// 期望的请求成功的 action
			const actSuccess = {
				type: Actions.GET_ABOUT_SUCCEED,
				data:data
			};
			const expectedActions = [
				actRequest,
				actSuccess,
			];
			fetchMock.mock(`begin:/api/about`,data);
			const store = mockStore({});
			await store.dispatch(Actions.fetchAbout());
			expect(store.getActions()).to.deep.equal(expectedActions);
		});
	});
});

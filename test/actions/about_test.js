/**
 * Created by llan on 2016/12/20.
 */
import * as Actions from '../../app/actions/about';

describe('actions/about', () => {
	let actions,
		dispatchSpy,
		getStateSpy,
		xhr,
		requests;

	beforeEach(function () {
		console.log('each');
		actions = [];
		dispatchSpy = sinon.spy(action => {
			actions.push(action)
		});
		xhr = sinon.useFakeXMLHttpRequest();
		requests = [];
		xhr.onCreate = function(xhr) {
			console.log('create');
			requests.push(xhr);
		};
	});

	afterEach(function() {
		xhr.restore();
	});

	describe('export constant',()=>{
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
	describe('action fetchAbout',()=>{
		it('fetchAbout should be exported as a function.', () => {
			expect(Actions.fetchAbout).to.be.a('function')
		});
		it('fetchAbout should return a function (is a thunk).', () => {
			expect(Actions.fetchAbout()).to.be.a('function')
		});
		it('Should call dispatch GET_ABOUT_SUCCEED', () => {
			Actions.fetchAbout()(dispatchSpy);
			
		});
	});
	describe('action changeStart',()=>{
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
	describe('action changeAbout',()=>{
		it('changeAbout be exported as a function.', () => {
			expect(Actions.changeAbout).to.be.a('function')
		});
	});
});

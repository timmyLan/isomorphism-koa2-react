/**
 * Created by llan on 2016/12/23.
 */
import React from 'react';
import {Rate, Button} from 'antd';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import { bindActionCreators } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import About from '../../app/containers/About';

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
	about: {
		about: '本对方相体史争列向六公外见见都电而将。走大率阶现利打热车完形利认现治火立。九了满为成听有系品达大见市局。受么维治传一没流十反见听子条海。便水际青已里米后连则选国百。流今性省认准标体得青在必收应心周就。',
		value: 1,
		loaded: true
	}
};

describe('app/containers/About', ()=> {
	let store,
		component,
		spies;
	beforeEach(() => {
		spies = {};
		store = mockStore({
			...storeStateMock,
			...bindActionCreators({
				handleChangeStart: (spies.handleChangeStart = sinon.spy()),
				handleChangeAbout: (spies.handleChangeAbout = sinon.spy())
			}, spies.dispatch = sinon.spy())
		});
		component = shallow(<About store={store}/>).shallow();
	});
	it('Should render as a <div>.', () => {
		expect(component.is('div')).to.equal(true);
	});
	it('Should have four children.', ()=> {
		expect(component.children()).to.have.length(4);
	});
	it('Should call handleChangeStart.', () => {
		spies.handleChangeStart.should.have.not.been.called;
		component.find('li.ant-rate-star').at(3).simulate('click');
		spies.dispatch.should.have.been.called;
	});
	it('Should call handleChangeAbout.',()=>{
		spies.handleChangeAbout.should.have.not.been.called;
		component.find('#change-about').simulate('click');
		spies.dispatch.should.have.been.called;
	});
});

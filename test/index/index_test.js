/**
 * Created by llan on 2016/12/19.
 */
import React from 'react';
import Welcome from '../../helper/index';
import {shallow} from 'enzyme';

describe('helper/index test', ()=> {
	let _wrapper;
	beforeEach(()=> {
		_wrapper = shallow(<Welcome/>);
	});
	it('Should render as a <div>.', ()=> {
		expect(_wrapper.is('div')).to.equal(true);
	});
});

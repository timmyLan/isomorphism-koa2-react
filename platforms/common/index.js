/**
 * Created by llan on 2016/12/14.
 */
import rp from 'request-promise';
import {mock} from 'mockjs';

exports.handleRp = async(options)=> {
	let defaultOptions = {
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true
	};
	defaultOptions = {...defaultOptions,...options};
	let res = await rp(defaultOptions);
	return mock(res);
};

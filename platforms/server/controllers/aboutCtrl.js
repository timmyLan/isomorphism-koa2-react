import {handleRp} from '../../common';

exports.getAbout = async(ctx) => {
	const options = {
		uri: 'http://rap.taobao.org/mockjsdata/11566/api/about'
	};
	let res = await handleRp(options);
	ctx.body = {
		code: 200,
		msg: 'ok',
		result: res
	};
};

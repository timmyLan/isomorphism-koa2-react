import {handleRp} from '../../common';

exports.getServer = async(ctx) => {
	const options = {
		uri: 'http://rap.taobao.org/mockjsdata/11566/api/'
	};
	let res = await handleRp(options);
	ctx.body = {
		code: 200,
		msg: 'ok',
		result: res
	};
};

import fetch from 'isomorphic-fetch'

export const SERVER_STATE_REQUEST = 'SERVER_STATE_REQUEST';
export const SERVER_STATE_SUCCEED = 'SERVER_STATE_SUCCEED';
export const SERVER_STATE_FAILED = 'SERVER_STATE_FAILED';

//服务端使用http.request方法需要完整路径
//客户端使用ajax，使用相对路径
//这里也可以使用 __SERVER__ ＝ typeof window !== 'undefined'
const fetchStateUrl = __SERVER__
	? `http://localhost:${require('../../platforms/common/config').port}/api/server`
	: '/api/server';

exports.fetchServerStateIfNeeded = ()=> {
	return (dispatch) => {
		return dispatch(fetchServerState())
	}
};

const fetchServerState = ()=> {
	return async(dispatch) => {
		dispatch(serverStateRequest());
		try {
			let response = await fetch(fetchStateUrl);
			let data = await response.json();
			return dispatch(serverStateSucceed(data))

		} catch (e) {
			return dispatch(serverStateFailed(e));
		}
	}
};


const serverStateRequest = ()=>({
	type: SERVER_STATE_REQUEST
});

const serverStateSucceed = (data)=>({
	type: SERVER_STATE_SUCCEED,
	data: data
});

const serverStateFailed = (error)=> {
	console.log('server state get failed', error);
	return {
		type: SERVER_STATE_FAILED,
		error
	}
};

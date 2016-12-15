import fetch from 'isomorphic-fetch';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCEED = 'GET_NEWS_SUCCEED';
export const GET_NEWS_FAILED = 'GET_NEWS_FAILED';

const fetchStateUrl = __SERVER__
	? `http://localhost:${require('../../platforms/common/config').port}/api/news`
	: '/api/news';

exports.fetchNews = ()=> {
	return async(dispatch)=> {
		dispatch(newsRequest());
		try {
			let response = await fetch(fetchStateUrl);
			let data = await response.json();
			return dispatch(newsSucceed(data))

		} catch (e) {
			return dispatch(newsFailed(e));
		}
	}
};

const newsRequest = ()=>({
	type: GET_NEWS_REQUEST
});

const newsSucceed = (data)=>({
	type: GET_NEWS_SUCCEED,
	data: data
});

const newsFailed = (error)=> {
	console.log('server state get failed', error);
	return {
		type: GET_NEWS_FAILED,
		error
	}
};

/**
 *
 */
import {combineReducers} from 'redux';
import server from './serverState';
import news from './news';
import about from './about';

export default combineReducers({
	server,
	news,
	about
})

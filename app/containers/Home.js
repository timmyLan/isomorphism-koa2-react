import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchServerStateIfNeeded} from '../actions/serverState';

@connect(
	state => state.server
)

class Home extends Component {
	constructor() {
		super()
	}

	static fetch(state, dispatch) {
		const fetchTasks = [];
		fetchTasks.push(
			dispatch(fetchServerStateIfNeeded(state))
		);
		return fetchTasks
	}

	// 前端在组件挂载后，要判断一下这个页面的状态数据，有没有初始化，如果没有，应该加载一次
	// 避免在前端路由跳转后，新的页面没有数据而报错
	componentDidMount() {
		const {loaded} = this.props;
		if (!loaded) {
			this.constructor.fetch(this.props, this.props.dispatch);
		}
	}

	render() {
		const {id = "", username = "", mobile = "", email = "", county = ""} = this.props.serverConfig || {};

		return (
			<div>
				<h3>首页</h3>
				<div>ID：{id}</div>
				<div>名称：{username}</div>
				<div>手机：{mobile}</div>
				<div>邮箱：{email}</div>
				<div>居住地：{county}</div>
			</div>
		)
	}
}


export default Home;

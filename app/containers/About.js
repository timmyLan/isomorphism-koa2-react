import React, {Component} from 'react';
import {Rate} from 'antd';
import {connect} from 'react-redux';
import {fetchAbout, changeStart} from '../actions/about';

@connect(
	state => state.about,
)

class About extends Component {
	static fetch(state, dispatch) {
		return dispatch(fetchAbout(state));
	};

	componentDidMount() {
		const {loaded} = this.props;
		if (!loaded) {
			this.constructor.fetch(this.props, this.props.dispatch);
		}
	}

	handleChange(value) {
		this.props.dispatch(changeStart(value));
	}

	render() {
		const {about, value} = this.props;
		return (
			<div>
				<Rate onChange={this.handleChange.bind(this)} value={value}/>
				{value && <span className="ant-rate-text">{value} stars</span>}
				<p>{about}</p>
			</div>
		)
	}
}

export default About;

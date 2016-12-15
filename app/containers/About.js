import React, {Component} from 'react';
import {Rate, Button} from 'antd';
import {connect} from 'react-redux';
import {fetchAbout, changeStart, changeAbout} from '../actions/about';

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

	handleChangeStart(value) {
		this.props.dispatch(changeStart(value));
	}

	handleChangeAbout() {
		this.props.dispatch(changeAbout());
	}

	render() {
		const {about, value} = this.props;
		return (
			<div>
				<Rate onChange={(value)=>this.handleChangeStart(value)} value={value}/>
				{value && <span className="ant-rate-text">{value} stars</span>}
				<p>{about}</p>
				<Button type="primary" onClick={()=>this.handleChangeAbout()}>Change About</Button>
			</div>
		)
	}
}

export default About;

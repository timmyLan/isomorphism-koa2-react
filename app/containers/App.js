import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Menu, Breadcrumb} from 'antd';
import {mock} from 'mockjs';
import 'antd/dist/antd.css';
import '../common/layout.less';

class App extends Component {
    render() {
        const currentMenu = this.props.location.pathname.replace('/', '') || 'home';
        return (
            <div>
                <div className="ant-layout-top">
                    <div className="ant-layout-header">
                        <div className="ant-layout-wrapper">
                            <div className="ant-layout-logo">
                                <img src={mock('@image(300x300, #50B347, #FFF, Mock.js)')} width="50"/>
                            </div>
                            <Menu theme="dark" mode="horizontal" style={{lineHeight: '64px'}}
                                  selectedKeys={[currentMenu]}>
                                <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
                                <Menu.Item key="news"><Link to="/news">News</Link></Menu.Item>
                                <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
                            </Menu>
                        </div>
                    </div>
                    <div className="ant-layout-wrapper">
                        <div className="ant-layout-container">
                            <div style={{minHeight: 900}}>
                                {this.props.children }
                            </div>
                        </div>
                    </div>
                    <div className="ant-layout-footer">
                        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(state => {
    return state.server;
})(App)

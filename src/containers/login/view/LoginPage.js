import React, { Component } from 'react';
import { Button, WingBlank, Icon, List, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../actions';
import './login.css';

const Item = List.Item;
const Brief = Item.Brief;
const mockUser = {
  "corpCode": '111',
  "accountName": '222',
  "accountPassword": '3333'
}

class LoginPage extends Component {

  onPressAbout = () => {
    this.props.history.push("/about");
  }

  onPressRepos = () => {
    Toast.info('2222', 1);
  }

  onSubmit = () => {
    this.props.dispatch(login(mockUser));
    this.props.history.push("/repos");
  }

  render() {
    return (
      <WingBlank className="App">
        <div className="App-header">
          <Icon type="success" size="lg" />
          <h2 className="">Welcome to React</h2>
        </div>

        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/repos">列表</Link></li>
        </ul>

        <List renderHeader={() => '测试'} className="my-list">
          <Item arrow="horizontal" extra={'extra content'} onClick={this.onPressAbout}>About</Item>
          <Item arrow="horizontal" platform="android" onClick={this.onPressRepos}>Repos</Item>
          <Item arrow="horizontal" multipleLine platform="android" onClick={() => { }}>
            ListItem<Brief>There may have water ripple effect of <br /> material if you set the click event.</Brief>
          </Item>
        </List>

        <Button type="primary" style={{ marginTop: 20 }} onClick={this.onSubmit}>确认</Button>
      </WingBlank>
    );
  }
}

const select = store => ({
  status: store.login.status,
  user: store.login.user,
})
export default connect(select)(LoginPage);
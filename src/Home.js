import React, { Component } from 'react';
import { Button, WingBlank, Icon, List, Toast } from 'antd-mobile';
import { Link, withRouter, Route } from 'react-router-dom'

import './App.css';

const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component {

  onPressAbout = () => {
    this.props.history.push("/about");
  }

  onPressRepos = () => {
    Toast.info('2222', 1);
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
          <li><Link to="/repos">主题列表</Link></li>
        </ul>

        <List renderHeader={() => '测试'} className="my-list">
          <Item arrow="horizontal" extra={'extra content'} onClick={this.onPressAbout}>About</Item>
          <Item arrow="horizontal" platform="android" onClick={this.onPressRepos}>Repos</Item>
          <Item arrow="horizontal" multipleLine platform="android" onClick={() => { }}>
            ListItem （Android）<Brief>There may have water ripple effect of <br /> material if you set the click event.</Brief>
          </Item>

        </List>
        <Button type="primary" style={{ marginTop: 20 }}>确认</Button>
      </WingBlank>
    );
  }
}

export default withRouter(Home);
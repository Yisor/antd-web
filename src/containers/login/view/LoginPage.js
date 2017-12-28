import React, { Component } from 'react';
import { Button, WingBlank, Icon, List, InputItem, Toast, TabBar, NavBar } from 'antd-mobile';
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
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, backgroundColor: '#fff' }}>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <div style={{ margin: 15, fontSize: 18, color: "#323b43", }}>登录飞巴商旅</div>
          <InputItem placeholder="企业编号" defaultValue="2016" style={{ textAlign: 'center', width: '295px', height: 50, }} />
          <InputItem placeholder="手机号" type="phone" style={{ textAlign: 'center', width: '295px', height: 50 }} />
          <InputItem clear placeholder="密码" style={{ textAlign: 'center', width: '295px', height: 50 }} />
          <Button className="App-login">登录</Button>

        </div>
      </div>
    );
  }
}

const select = store => ({
  status: store.login.status,
  user: store.login.user,
})
export default connect(select)(LoginPage);
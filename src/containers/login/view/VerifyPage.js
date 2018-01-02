import React, { Component } from 'react';
import { Button, Icon, List, InputItem, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import styles from './login.css';

class VerifyPage extends Component {

  onSendSms = () => {
    this.props.history.push("/captcha");
  }

  onFallback = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', width: '100%', margin: 15, fontSize: 18, color: "#323b43", justifyContent: 'space-between' }}>
            <Icon type="cross" style={{ marginLeft: 15 }} onClick={this.onFallback} />
            账号验证
           <div />
          </div>
          <InputItem placeholder="企业编号" defaultValue="2016" style={{ width: '295px', height: 58, }} />
          <InputItem placeholder="手机号" type="phone" style={{ width: '295px', height: 58 }} />
          <Button className={styles.verify_button} onClick={this.onSendSms}>发送验证码</Button>
        </div>
      </div>
    );
  }
}

const select = store => ({
  status: store.login.status,
  user: store.login.user,
})
export default connect(select)(VerifyPage);
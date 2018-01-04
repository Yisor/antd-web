import React, { Component } from 'react';
import { Button, Icon, List, InputItem, Toast, } from 'antd-mobile';
import styles from './login.css';

class CaptchaPage extends Component {
  onSubmit = () => {
    this.props.history.push("/password");
  }

  onFallback = () => {
    this.props.history.goBack();
  }

  onResend = () => {
    Toast.info('重新发送', 1);
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', width: '100%', margin: 15, fontSize: 18, color: "#323b43", justifyContent: 'space-between' }}>
            <Icon type="left" style={{ marginLeft: 15 }} onClick={this.onFallback} />
            短信验证码已发送
           <div />
          </div>
          <p style={{ fontSize: 14, color: "#797f85", marginLeft: 20, marginRight: 20 }}>{`短信验证码已发送至 +86${13023618512} 请注意查收`}</p>
          <InputItem type="number" maxLength={6} style={{ width: '295px', height: 58 }} />
          <Button className={styles.verify_button} onClick={this.onSubmit}>下一步</Button>
          <p style={{ fontSize: 16, color: "#51a6f0" }} onClick={this.onResend}>重新发送验证码</p>
        </div>
      </div>
    );
  }
}

export default CaptchaPage;
import React, { Component } from 'react';
import { Button, Icon, InputItem, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import styles from './login.css';

class PasswordPage extends Component {

  onSubmit = () => {
    Toast.info('确认', 1);
  }

  onFallback = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', width: '100%', margin: 15, fontSize: 18, color: "#323b43", justifyContent: 'space-between' }}>
            <Icon type="left" style={{ marginLeft: 15 }} onClick={this.onFallback} />
            输入新密码
           <div />
          </div>
          <InputItem placeholder="新密码" type="text" style={{ width: '295px', height: 58, }} />
          <InputItem placeholder="再次输入新密码" type="text" style={{ width: '295px', height: 58 }} />
          <Button className={styles.verify_button} onClick={this.onSubmit}>确定</Button>
        </div>
      </div>
    );
  }
}

const select = store => ({
  status: store.login.status,
})
export default connect(select)(PasswordPage);
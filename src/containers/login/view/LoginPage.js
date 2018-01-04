import React, { Component } from 'react';
import { Button, Icon, List, InputItem, Toast, TabBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { createForm } from 'rc-form';
import { login } from '../actions';
import styles from './login.css';
import _ from 'lodash/string';
class LoginPage extends Component {
    state = {
        user: {
            "corpCode": '2016',
            "accountName": null,
            "accountPassword": null
        },
        isActive: false
    }

    onChange = (field, value) => {
        const { user, user: { corpCode, accountName, accountPassword } } = this.state;
        user[field] = value.replace(/\s+/g, "");
        const isActive = corpCode && accountName && accountPassword;
        this.setState({ user: user, isActive });
    }

    onSubmit = () => {
        this.props.form.validateFields((err, values) => {
            console.log(err, values);
            if (!err) {
                let { user } = this.state;
                this.props.dispatch(login(user));
                this.props.history.push("/repos");
            } else {
                Toast.info('登录信息错误', 1);
            }
        });
    }

    onForgotPsw = () => {
        this.props.history.push("/verify");
    }

    render() {
        const { getFieldProps } = this.props.form;
        const btnSytle = this.state.isActive ? styles.button_active : styles.button;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div style={{ margin: 15, fontSize: 18, color: "#323b43", }}>登录飞巴商旅</div>
                    <InputItem
                        {...getFieldProps('corpCode', {
                            initialValue: '2016',
                            rules: [{ required: true }],
                            onChange: value => this.onChange('corpCode', value),
                        }) }
                        placeholder="企业编号"
                        style={{ textAlign: 'center', width: '295px', height: 50 }} />

                    <InputItem
                        {...getFieldProps('phone', {
                            rules: [{ type: 'string', required: true }],
                            onChange: value => this.onChange('accountName', value)
                        }) }
                        type="phone"
                        placeholder="手机号"
                        style={{ textAlign: 'center', width: '295px', height: 50 }} />

                    <InputItem
                        {...getFieldProps('password', {
                            rules: [{ type: 'string', required: true }],
                            onChange: value => this.onChange('accountPassword', value)
                        }) }
                        type="password"
                        placeholder="密码"
                        style={{ textAlign: 'center', width: '295px', height: 50 }} />

                    <Button className={btnSytle} activeClassName={styles.button_active} onClick={this.onSubmit}>登录</Button>
                    <p style={{ fontSize: 14, color: "#a0a4a8" }} onClick={this.onForgotPsw}>忘记密码？</p>
                </div>
            </div>
        );
    }
}

const select = store => ({
    status: store.login.status,
    user: store.login.user,
})

const Login = createForm()(LoginPage);
export default connect(select)(Login);
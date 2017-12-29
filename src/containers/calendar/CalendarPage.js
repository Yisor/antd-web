import React, { Component } from 'react';

import { List, Switch, Calendar } from 'antd-mobile';

const extra = {};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate())] = { info: '今天' };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { disable: true };

// Object.keys(extra).forEach((key) => {
//   const info = extra[key];
//   const date = new Date(key);
//   console.log('测试：'+JSON.stringify(info));
//   if (!Number.isNaN(+date) && !extra[+date]) {
//     extra[+date] = info;
//   }
// });

class CalendarPage extends React.Component {
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      config: {},
    };
  }

  renderBtn(txt, config = {}) {
    return (
      <List.Item arrow="horizontal"
        onClick={() => {
          document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
          this.setState({ show: true, config });
        }}>
        {txt}
      </List.Item>
    );
  }

  renderList() {
    return (
      <List className="calendar-list" style={{ backgroundColor: 'white' }}>
        {this.renderBtn('选择日期区间')}
        {this.renderBtn('选择日期', { type: 'one' })}
        {this.renderBtn('onSelect API', {
          onSelect: (date) => {
            console.log('onSelect', date);
            return [date, new Date(+now - 604800000)];
          },
        })}
        
        {
          this.state.startTime &&
          <List.Item>Time1: {this.state.startTime.toLocaleString()}</List.Item>
        }
        {
          this.state.endTime &&
          <List.Item>Time2: {this.state.endTime.toLocaleString()}</List.Item>
        }
      </List>
    );
  }

  onConfirm = (startTime, endTime) => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime,
      endTime,
    });
  }

  onCancel = () => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined,
    });
  }

  getDateExtra = date => {
    console.log('消息：' + JSON.stringify(extra));
    return extra[+date];
  };

  getMinDate() {
    let now = new Date();
    return new Date(+now.setDate(1));
  }

  getMaxDate() {
    let now = new Date();
    now.setMonth(now.getMonth() + 6);
    now.setDate(1);
    return new Date(+(now.getTime() - 1000 * 60 * 60 * 24));
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <Calendar
          {...this.state.config}
          renderHeader={() => { }}
          visible={this.state.show}
          getDateExtra={this.getDateExtra}
          minDate={this.getMinDate()}
          initalMonths={6}
        />
      </div>
    );
  }
}

export default CalendarPage;
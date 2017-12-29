import React, { Component } from 'react';
import PropTypes from 'prop-types'

import calendar from './assets/plane_calendar.png'
import { Icon } from 'antd-mobile';
import './dateSwitcher.css'

class DateSwitcher extends Component {

  static propTypes = {
    onSelect: PropTypes.func,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
  }

  static defaultProps = {
    onSelect() { },
    minDate: '0',
    maxDate: '9'
  }

  handleIncreaseMonth() {
    alert('点击加');
  }
  handleReduceMonth() {
    alert('点击减');
  }
  handleChangeMonth() {
    alert('点击');
  }

  render() {
    return (
      <div className="calendar-header">
        <div className="header-left" onClick={this.handleIncreaseMonth}>
          <Icon type="left" />
          <div>前一天</div>
        </div>

        <div className="radius-bg" onClick={this.handleChangeMonth}>
          <div style={{ fontSize: 12, color: '#000' }}>{`${2}月 ${11}日`}</div>
          <div style={{ fontSize: 12, color: '#000', marginLeft: 5 }}>{`${'周一'}`}</div>
          <div style={{ height: 15, width: 1, backgroundColor: '#000', marginLeft: 10, marginRight: 10 }} />
          <img className="icon-calendar" src={calendar} />
        </div>

        <div className="header-right" onClick={this.handleReduceMonth}>
          <div>后一天</div>
          <Icon className="icon-right" type="right" />
        </div>
      </div>
    );
  }
}

export default DateSwitcher;
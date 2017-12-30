import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Icon } from 'antd-mobile';

import { dateFormat } from './utils'
import calendar from './assets/plane_calendar.png'
import './dateSwitcher.css'

const weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

class DateSwitcher extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    onPress: PropTypes.func,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    defaultDate: PropTypes.object,
  }

  static defaultProps = {
    minDate: new Date(),
  }

  constructor(props) {
    super(props)
    const activeDate = this.props.defaultDate ? this.props.defaultDate : new Date();
    this.state = { activeDate }
  }

  updateDate(now) {
    this.setState({ activeDate: now })

    let { onChange } = this.props;
    onChange && onChange(now);
  }

  handleIncreaseDate = () => {
    let now = this.state.activeDate;
    let { onChange, maxDate } = this.props;
    if (!maxDate) {
      now.setDate(now.getDate() + 1);
      this.updateDate(now);
    } else if (!this.isSameDay(now, maxDate) && maxDate > now) {
      now.setDate(now.getDate() + 1);
      this.updateDate(now);
    }
  }

  handleReduceDate = () => {
    let { onChange, minDate } = this.props;
    let nextDate = this.state.activeDate;
    if (!this.isSameDay(nextDate, minDate) && nextDate > minDate) {
      nextDate.setDate(nextDate.getDate() - 1);
      this.updateDate(nextDate);
    }
  }

  handleSelectDate = () => {
    let { onPress } = this.props;
    onPress && onPress();
  }

  isSameDay(d1, d2) {
    return d1 && d2 && (dateFormat(d1) == dateFormat(d2));
  }

  getHeaderTxt() {
    let today = dateFormat(this.state.activeDate).slice(5, 11);
    let weekday = this.state.activeDate.getDay();
    return `${today} ${weekDays[weekday]}`;
  }

  render() {
    return (
      <div className="calendar-header">
        <div className="header-left" onClick={this.handleReduceDate}>
          <Icon type="left" />
          <div>前一天</div>
        </div>

        <div className="radius-bg" onClick={this.handleSelectDate}>
          <div style={{ fontSize: 12, color: '#000' }}>{this.getHeaderTxt()}</div>
          <div style={{ height: 15, width: 1, backgroundColor: '#000', marginLeft: 10, marginRight: 10 }} />
          <img className="icon-calendar" src={calendar} />
        </div>

        <div className="header-right" onClick={this.handleIncreaseDate}>
          <div>后一天</div>
          <Icon className="icon-right" type="right" />
        </div>
      </div>
    );
  }
}

export default DateSwitcher;
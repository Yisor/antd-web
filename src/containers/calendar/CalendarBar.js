import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Icon } from 'antd-mobile';

import { sameDay, getCalendarTxt } from './utils'
import calendar from './assets/plane_calendar.png'
import './dateSwitcher.css'

const weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

class CalendarBar extends Component {

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

  onRightClick = () => {
    let now = this.state.activeDate;
    let { maxDate } = this.props;
    if (!maxDate) {
      now.setDate(now.getDate() + 1);
      this.updateDate(now);
    } else if (!sameDay(now, maxDate) && maxDate > now) {
      now.setDate(now.getDate() + 1);
      this.updateDate(now);
    }
  }

  onLeftClick = () => {
    let { minDate } = this.props;
    let nextDate = this.state.activeDate;
    if (!sameDay(nextDate, minDate) && nextDate > minDate) {
      nextDate.setDate(nextDate.getDate() - 1);
      this.updateDate(nextDate);
    }
  }

  onMiddleClick = () => {
    let { onPress } = this.props;
    onPress && onPress();
  }

  render() {
    return (
      <div className="calendar-header">
        <div className="header-left" onClick={this.onLeftClick}>
          <Icon type="left" />
          <div>前一天</div>
        </div>

        <div className="radius-bg" onClick={this.onMiddleClick}>
          <div style={{ fontSize: 12, color: '#000' }}>{getCalendarTxt(this.state.activeDate)}</div>
          <div style={{ height: 15, width: 1, backgroundColor: '#000', marginLeft: 10, marginRight: 10 }} />
          <img className="icon-calendar" src={calendar} alt='' />
        </div>

        <div className="header-right" onClick={this.onRightClick}>
          <div>后一天</div>
          <Icon className="icon-right" type="right" />
        </div>
      </div>
    );
  }
}

export default CalendarBar;
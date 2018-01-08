import React, { Component } from 'react';
import PropTypes from 'prop-types'

const orderStatus = ['待支付', '出票失败', '退改签', '已完成', '已取消', '出票中', '等待出票', '出票中', '需要补款', '等待出票',
  '出票中', '出票失败', '退票中', '退票失败', '退票成功', '待确认', '等待出票', '出票中', '退改签', '退改签', '退改签', '退改签']

class FlightOrderItem extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    order: PropTypes.object,
  }

  onItemPress = () => {
    let { onPress } = this.props;
    onPress && onPress();
  }

  render() {
    const { order } = this.props;

    let date = new Date(order.departureTime);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return (
      <div
        onPress={this.onItemPress}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          borderTop: '6px solid #ECECED'
        }}
      >
        <div style={{ marginLeft: 20 }}>
          <div style={{ color: '#323b43', marginTop: 10 }}>{`${order.departureCityName} - ${order.destinationCityName}`}</div>
          <div style={{ color: '#797f85', marginTop: 10 }}>{order.airlineShortName}</div>
          <div style={{ color: '#797f85', marginTop: 10, marginBottom: 10 }}>{`出发时间：${year} - ${month} - ${day}`}</div>
        </div>
        <div style={{ marginRight: 20 }}>
          <div style={{ color: '#e26a6a', marginBottom: 12 }}>{`￥${order.orderPay}`}</div>
          <div>{`${orderStatus[0]}`}</div>
        </div>
      </div>
    );
  }
}

export default FlightOrderItem;
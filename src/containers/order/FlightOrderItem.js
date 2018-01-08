import React, { Component } from 'react';
import PropTypes from 'prop-types'

const orderStatus = ['待支付', '出票失败', '退改签', '已完成', '已取消', '出票中', '等待出票', '出票中', '需要补款', '等待出票',
  '出票中', '出票失败', '退票中', '退票失败', '退票成功', '待确认', '等待出票', '出票中', '退改签', '退改签', '退改签', '退改签']

class FlightOrderItem extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    minDate: PropTypes.object,
    defaultDate: PropTypes.object,
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderTop: '6px solid #ECECED' }}>
        <div style={{ marginLeft: 20 }}>
          <div style={{ color: '#323b43', marginTop: 10 }}>北京-杭州</div>
          <div style={{ color: '#797f85', marginTop: 10 }}>东方航空</div>
          <div style={{ color: '#797f85', marginTop: 10, marginBottom: 10 }}>出发时间：2018-02-21</div>
        </div>
        <div style={{ marginRight: 20 }}>
          <div style={{ color: '#e26a6a', marginBottom: 12 }}>￥800</div>
          <div>{`${orderStatus[0]}`}</div>
        </div>
      </div>
    );
  }
}

export default FlightOrderItem;
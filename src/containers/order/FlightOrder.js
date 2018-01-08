import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';

const tabs = [
  { title: '全部' },
  { title: '待付款' },
  { title: '已完成' },
  { title: '已取消' },
];

class FlightOrder extends Component {
  render() {
    return (
      <div>
        <Tabs tabs={tabs}>
          <div className="bgRed">
            1
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            2
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            3
           </div>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
           4
          </div>
        </Tabs>
      </div>
    );
  }
}

export default FlightOrder;
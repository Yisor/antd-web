import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Tabs, List, NavBar, Toast, ListView } from 'antd-mobile';
import FlightOrderItem from './FlightOrderItem';

import list from './flightorders.json';

const tabs = [
  { title: '全部' },
  { title: '待付款' },
  { title: '已完成' },
  { title: '已取消' },
];


class FlightOrder extends Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
    };
  }

  componentDidMount() {
    // TODO 请求数据
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(list),
        height: hei,
      });
    }, 600);
  }

  onChange = (tab, index) => {
    // TODO更新数据
    console.log('onChange', index, tab);
  }

  onItemPress = () => {
    Toast.info('点击了', 1);
  }

  renderRow = (item) => {
    return <FlightOrderItem order={item} onPress={this.onItemPress} />;
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <NavBar mode="dark" icon={<Icon type="left" />}>机票订单</NavBar>
        <Tabs tabs={tabs} onChange={this.onChange}>
          <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            style={{ height: this.state.height, overflow: 'auto' }}
            pageSize={4}
            useBodyScroll
            onScroll={() => { console.log('scroll'); }}
            scrollRenderAheadDistance={500}
            onEndReachedThreshold={10} />
        </Tabs>
      </div>
    );
  }
}

export default FlightOrder;
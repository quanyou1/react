import React from 'react';
import { connect } from 'dva';
import styles from './header.less'
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import { Icon, Input, AutoComplete, Switch, Select } from 'antd';

const Option = Select.Option;



function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}


function onSelect(value) {
  console.log('onSelect', value);

}


function onSelect(value) {
  console.log('onSelect', value);
  console.log(this.dataSource)
}



class indexHeader extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
      inforList: [],
      current: 1,
      dataSource: "",
      value: "",
      select: 1
    };
};

change = (e) =>{
  this.setState({value: e.target.value});
  console.log(this.state.value);
}

handleSearch = (value) => {
  this.setState({
    dataSource: !value ? [] : [
      value
    ],
  });
}

handleChange = (value) => {
  console.log(value)
  this.setState({ 
      select: value
   });
   console.log(this.state.select);
}

componentDidMount() {
  var myFetchOptions = {

  };
  
  fetchJsonp("http://192.168.2.207:89/index.php?m=home&c=homeapi&a=news&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=" + this.props.p, myFetchOptions).then(response => response.json()).then(inforList => {
    this.setState({
      inforList: inforList.data
    });
    console.log(inforList);
      });


};

  
render() {


 
  const { dataSource } = this.state;
  const { select } = this.state;
  return(
    <div className={styles.pcHeader}>
        <div className={styles.logo}>
          <div className={styles.logoImg}>
            <img src={require('../images/logo.png')}></img>
          </div>
          <div className={styles.logoInfor}>
            <p>全国城市安防协会合作互助联盟</p>
            <span>National Security City Cooperative Alliance</span>
          </div>
        </div>

        <div className={styles.searchInput}>
        <Select
          showSearch
          style={{ width: 60 }}
          placeholder="资讯"
          optionFilterProp="children"
          onChange={this.handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="1">资讯</Option>
          <Option value="2">专家</Option>
          <Option value="3">成员</Option>
        </Select>
          <AutoComplete
            dataSource={dataSource}
            style={{ width: 160 }}
            onSelect={onSelect}
            onSearch={this.handleSearch}
            placeholder="请输入关键字"
          />
         
          <Link target="_blank" to={`/infor_search/${this.state.select}/${this.state.dataSource}`} ><Icon type="search" /></Link>
          {/* <input type="text" className="input"
              onChange={this.change}
              value={this.state.value}
         /> */}
         </div>
      </div>
  );
}
}



export default indexHeader;

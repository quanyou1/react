import { connect } from 'dva';
import styles from './IndexPage.less';
import { Switch } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react'



class IndexPage extends React.Component {
  render () {
   
    return (
      <div className='wrap'>
        
        <h3>子路由</h3>
        <Link to={'/'} >/about</Link>
        <Link to={'/'} >/index</Link>
        <Link to={'/pc'} >/pc</Link>
        <Link to={'/mob'} target="_blank" >/mob</Link>
        {this.props.children}

        
      </div>
    )
    
  }
}


export default IndexPage

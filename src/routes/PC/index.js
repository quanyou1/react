import React, { Component } from 'react'
import { connect } from 'dva';
import indexCss from './index.less';
import normalize from './normalize.css';
import { Switch, BackTop} from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import Header from './header/header';
import Pcontainer from './container/index';
import Footer from './pc_footer';
import WeChatScan from './container/weChatScan';


class IndexPage extends React.Component {
  
  render () {
   
    return (
      <div className={indexCss.indexCont}>
          <Header />
          <Pcontainer />
          {this.props.children}
          <Footer /> 
          <WeChatScan />
          <BackTop />
         
    </div>
    )
    
  }
}

export default IndexPage;




import React from 'react';
import { connect } from 'dva';
import styles from './container.less';
import { Switch, Menu, Breadcrumb, Layout } from 'antd';
const { Header } = Layout;
import { Router, Route, Link, hashHistory } from 'dva/router'
import { NavLink } from 'react-router-dom'


class pcContainer extends React.Component {
  
constructor(props) {
  super(props);
  this.state = {
          
      };
      

  };

 


  
render() {
  var webSite = "http://www.nscca.cn";
  return(
    <div className={styles.pcContainer}>
        <div className={styles.nav_wrapper}>
            
            <div className={styles.nav_width}>
              <Header className={styles.ant_header} >
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '60px', height: '60px' }}
                    className={styles.ant_headli}
                    rootPrefixCls='styles'
                  >
                    <Menu.Item  key="1"><Link to={'/'} ><span>首页</span></Link></Menu.Item>
                    <Menu.Item  key="2"><Link to={'/aboutAll'} ><span>关于联盟</span></Link></Menu.Item>
                    <Menu.Item  key="3"><Link to={'/alianceDyn'} ><span>联盟动态</span></Link></Menu.Item>
                    <Menu.Item  key="4"><Link to={'/industInfor'} ><span>行业资讯</span></Link></Menu.Item>
                    <Menu.Item  key="5"><Link to={'/allianMem'} ><span>联盟成员</span></Link></Menu.Item>
                    <Menu.Item  key="6"><Link to={'/memberDyn'} ><span>成员动态</span></Link></Menu.Item>
                    <Menu.Item  key="7"><Link to={'/expertData'} ><span>专家库</span></Link></Menu.Item>
                  </Menu>
                </Header>
                {/* <ul> 
                  <li><NavLink to={'/pc'} activeClassName={styles.selected}><span>首页</span></NavLink></li>
                  <li><NavLink to={'/'} activeClassName={styles.selected}><span>关于联盟</span></NavLink></li>
                  <li><NavLink to={'/mob'} activeClassName={styles.selected}><span>联盟动态</span></NavLink></li>
                  <li><NavLink to={'/mob'} activeClassName={styles.selected}><span>行业资讯</span></NavLink></li>
                  <li><NavLink to={'/mob'} activeClassName={styles.selected}><span>联盟成员</span></NavLink></li>
                  <li><NavLink to={'/mob'} activeClassName={styles.selected}><span>成员动态</span></NavLink></li>
                  <li><NavLink to={'/mob'} activeClassName={styles.selected}><span>专家库</span></NavLink></li>
                </ul> */}
            </div>
        </div>
    </div>
  );
}
}



export default pcContainer;






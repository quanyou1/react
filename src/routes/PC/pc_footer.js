import React, { Component }  from 'react';
import footCss from './index.less';
import { Router, Route, Link, hashHistory } from 'dva/router'


class FooterPage extends React.Component {
  render () {
   
    return (
      <div className={footCss.pcFooter}>
        <div className={footCss.footWidth}>
            <div className={footCss.union}>
                <ul>
                    <li><Link to={'/aboutAll'}>关于联盟</Link></li>
                    <li><Link to={'/alianceDyn'}>联盟动态</Link></li>
                    <li><Link to={'/allianMem'}>联盟成员</Link></li>
                    <li><Link to={'/inforDel/关于联盟/23'}>联系我们</Link></li>
                </ul>
            </div>
            <div className={footCss.copyRight}>
                <div className={footCss.allian_phone}>
                    电话：0755-88309157   <span>传真：0755-88309111</span>
                </div>
                <span>Copyright 2012-2017 © 全国城市安防协会合作互助联盟版权所有</span>
            </div>
        </div>
        
      </div>
    )
    
  }
}



export default FooterPage;

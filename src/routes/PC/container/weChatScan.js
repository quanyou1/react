import { connect } from 'dva';
import styles from './container.less'
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';


class newsDynamic extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
        };
        

    };

   
   

	componentDidMount() {
		var myFetchOptions = {

		};
		
        

	};

    
	render() {
		
		return(
			
			<div className={styles.pc_weChet}>
              <div className={styles.codes}>
                  <span className={styles.weChet_code}></span>
                  <div className={styles.codeBack}>
                      <img src={require('../images/code.jpg')}/>
                  </div>
              </div>
          </div>
		);
	}
}

  

export default newsDynamic;

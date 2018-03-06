import { connect } from 'dva';
import allianCss from './children.less'
import fetchJsonp from 'fetch-jsonp';
// import { Tabs, Carousel, Icon } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
import InforList from './infor_children';


class Apps extends React.Component {
    
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
		var webSite = "http://www.nscca.cn";
		return(
			<InforList p="2" cartTitle="行业资讯" />

		);
	}
}

  

export default Apps;

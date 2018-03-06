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
            comments: []
        };
        

    };

   
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite+"/index.php?m=home&c=homeapi&a=member&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=" + this.state.p, myFetchOptions).then(response => response.json()).then(comments => {
			this.setState({
				comments: comments.data
			});
			console.log(comments);
        });

        

	};

    
	render() {
		var webSite = "http://www.nscca.cn";
		return(

				<InforList p="4" cartTitle="关于联盟"/>
		);
	}
}

  

export default Apps;

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
		var myFetchOptions = {

		};
		
		fetchJsonp("http://192.168.2.207:89/index.php?m=home&c=homeapi&a=member&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=" + this.state.p, myFetchOptions).then(response => response.json()).then(comments => {
			this.setState({
				comments: comments.data
			});
			console.log(comments);
        });

        

	};

    
	render() {
        var webSite = "http://192.168.2.207:89";
		return(
             <InforList p="1" cartTitle="联盟动态" />
		);
	}
}

  

export default Apps;

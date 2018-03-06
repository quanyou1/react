import { connect } from 'dva';
import styles from './container.less'
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
import Slider from 'slider'


class unionDynamic extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			unionMen: []
        };
    };

   
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};

		fetchJsonp(webSite+ "/index.php?m=home&c=homeapi&a=member&callback=userapi&key=QUgFYq4L5n89ZG2Ab&page=" + this.props.page).then(response => response.json()).then(unionMen => {
			this.setState({
				unionMen: unionMen.data
			});
			console.log(unionMen);
        });

	};

	componentWillUnmount() {
		
	}

    
	render() {
		const {unionMen} = this.state;
		console.log(unionMen);
		var webSite = "http://www.nscca.cn";


		let unionMenList = unionMen && unionMen.length || 0 ?
			unionMen.map((unionItem, index) => {
				var src = unionItem && unionItem.logo? webSite+ unionItem.logo : require('../images/no_logo.jpg');				
				return <li>
					<Link to={`/allianDel/${unionItem.id}`} className={styles.allianEnter}>
						<img src={src}/>
						<h5>{unionItem.xhname}</h5>
						<p>{unionItem.street}</p>
					</Link>
				</li>
			}) :
		<p className = {styles.loding} > 没有加载到任何联盟成员 </p>;
		
		return(
			<div className={styles.union_switch}>
				{unionMenList}  
			</div>
		);
	}
}

  

export default unionDynamic;

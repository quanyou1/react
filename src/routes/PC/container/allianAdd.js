import { connect } from 'dva';
import inforCss from './children.less'
import fetchJsonp from 'fetch-jsonp';
// import { Tabs, Carousel, Icon } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
import { Pagination } from 'antd';
import NewDynamic from './newDynamic';



class inforList extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			inforList: [],
			allianList: [],
			current: this.props.current
			
		}

	};
	
	onChange = (page) => {
		console.log(page);
		
		this.setState({
			current: page
		});
		console.log(this.state.current)
		
	}


   
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=memberlist&callback=userapi&key=QUgFYq4L5n89ZG2Ab&page=" + this.props.current, myFetchOptions).then(response => response.json()).then(allianList => {
			this.setState({
				allianList: allianList.data
			});
        });
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=memberlist&callback=userapi&key=QUgFYq4L5n89ZG2Ab", myFetchOptions).then(response => response.json()).then(inforList => {
			this.setState({
				inforList: inforList.data
			});
        });

        

	};

    
	render() {
		var webSite = "http://www.nscca.cn";
		const {allianList} = this.state;
		const {inforList} = this.state;
		console.log(inforList);
		console.log(allianList);

		let inforData = allianList && allianList.length || 0 ?
			allianList.map((allianItem, index) => (
				<li>
					<Link to={`/allianDel/${allianItem.id}`}> 
						<div className={inforCss.allainImg}>
							<img src={webSite +allianItem.logo}/>
						</div>
						<div className={inforCss.allainInfor}>
							<h4>{allianItem.xhname}</h4>
							<p>{allianItem.region_name}省{allianItem.cityname}市{allianItem.street}</p>
							<h5>{allianItem.phone}（王小华）{this.state.current}</h5>
							<span>{allianItem.email}</span>
						</div>
					</Link>
				</li>    
			)) :
		<p className = {inforCss.loding} > 没有加载到任何信息 </p>;

		return(
			<div>
			{inforData}
			</div>				
		);
	}
}

  

export default inforList;

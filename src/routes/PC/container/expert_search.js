import { connect } from 'dva';
import inforCss from './children.less'
import fetchJsonp from 'fetch-jsonp';
// import { Tabs, Carousel, Icon } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
import { Pagination } from 'antd';
import NewDynamic from './newDynamic';

function onShowSizeChange(current, pageSize) {
	console.log(current, pageSize);
  }
  

class inforList extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
            expertList: []
        };
        

    };

   
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=search&type=2&search=" +`${this.props.match.params.dataSource}` + "&callback=userapi&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(expertList => {
			this.setState({
				expertList: expertList.data
			});
			console.log(expertList);
		});

        

	};

    
	render() {
		var webSite = "http://www.nscca.cn";
		const {expertList} = this.state;
		console.log(expertList);

		

		let expertData = expertList && expertList.length || 0 ?
			expertList.map((expertItem, index) => (
				<li>
					<div className={inforCss.expertImg}>
						<img src={require('../images/icon_portrait.png')} />
					</div>
					<div className={inforCss.expert_infor}>
						<h3>{expertItem.name}</h3>
						<p>学历：{expertItem.education}</p>
						<p>专业：{expertItem.specialty}</p>
						<p>单位：{expertItem.company}</p>
						<p>职务：{expertItem.position}</p>
						<p>职称：{expertItem.position2}</p>
						<p>推荐单位：{expertItem.units}</p>
					</div>
				</li>
			)) :
		<div className={inforCss.no_search}>
			<p>搜索不到<span>“{this.props.match.params.dataSource}”</span>的内容</p>
			<h3>建议您修改下搜索关键词</h3>
		</div>;

		return(
			<div className={inforCss.infor_wrapper}>
                <div className={inforCss.child_width}>
					<div className={inforCss.child_title}>
                    	<h2><Link to={'/'}>首页 ></Link> &nbsp;<span>搜索：{this.props.match.params.dataSource}</span></h2>
					</div>
					
					<div className={inforCss.inforContainer}>
						
						<div className={inforCss.infor_left}>
							
							<div className={inforCss.consortList}>
								<ul>
									{expertData}
								</ul>
							</div>
							<div className={inforCss.paginAtion}>
								<Pagination  defaultPageSize={6} defaultCurrent={1} total={expertList.length} />
							</div>
						</div>
						<NewDynamic />
					</div>
				</div>
            </div>
		);
	}
}
export default inforList;

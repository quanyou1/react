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
			expertList: [],
			expertData: [],
			current: 1
        };
		

	};
	
	onChange = (page) => {
		console.log(page);
		
		this.setState({
			current: page
		});
		console.log(this.state.current)
		this.getData( page );
	}

   getData(page) {
		var webSite = "http://www.nscca.cn";
		let { current } = this.state;
		   fetchJsonp(webSite+"/index.php?m=home&c=homeapi&a=expertlist&callback=userapi&page=" + page + "&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(expertList => {
			this.setState({
				expertList: expertList.data
			});
			console.log(expertList)
		});
		
   }



	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite+"/index.php?m=home&c=homeapi&a=expertlist&callback=userapi&page=" + this.state.current + "&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(expertList => {
			this.setState({
				expertList: expertList.data
			});
			console.log(expertList);
		});

        fetchJsonp(webSite+"/index.php?m=home&c=homeapi&a=expertlist&callback=userapi&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(expertData => {
			this.setState({
				expertData: expertData.data
			});
			console.log(expertData);
		});

	};

    
	render() {
		var webSite = "http://www.nscca.cn";

		const {expertList} = this.state;
		console.log(expertList);
		const {expertData} = this.state;
		console.log(expertData);

		let expertDatas = expertList && expertList.length || 0 ?
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
		<p className = {inforCss.loding} > 没有加载到任何信息 </p>;

		return(
			<div className={inforCss.infor_wrapper}>
                <div className={inforCss.child_width}>
					<div className={inforCss.child_title}>
                    	<h2><Link to={'/'}>首页 ></Link> &nbsp;<span>专家库</span></h2>
					</div>
					<div className={inforCss.consort_title}>
							<h2>联盟专家库<span>（共{expertData.length}位）</span></h2>
						</div>
					<div className={inforCss.inforContainer}>
						
						<div className={inforCss.infor_left}>
							
							<div className={inforCss.consortList}>
								<ul>
									{expertDatas}
								</ul>
							</div>
							<div className={inforCss.paginAtion}>
								<Pagination current={this.state.current} defaultCurrent={1} onChange={this.onChange}  total={expertData.length} /> 
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

import { connect } from 'dva';
import inforCss from './children.less'
import fetchJsonp from 'fetch-jsonp';
// import { Tabs, Carousel, Icon } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
import { Pagination, Layout, Menu, Breadcrumb } from 'antd';
import NewDynamic from './newDynamic';
import AllianAdd from './allianAdd';



class inforList extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			inforList: [],
			allianList: [],
			provinList: [],
			total: "",
			current: 1
		}

	};
	
	onChange = (page) => {
		console.log(page);
		
		this.setState({
			current: page
		});

		this.getData(page);
	}

   getData(page) {
	
		var webSite = "http://www.nscca.cn";

   		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=memberlist&callback=userapi&key=QUgFYq4L5n89ZG2Ab&page=" + page).then(response => response.json()).then(allianList => {
			this.setState({
				allianList: allianList.data
			});
			console.log(allianList)
        });
		
   }

   onScreen = (provin) => {
		console.log(provin);

		this.getScreenData(provin);
	}


	getScreenData(provin) {

		fetchJsonp("http://www.nscca.cn/index.php?m=home&c=homeapi&a=memberlist&province=" + provin + "&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=1&page=1").then(response => response.json()).then(allianList => {
				
			this.setState({
				allianList: allianList.data,
				total: allianList.total
			});
			
		});
		
	}

      

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=memberlist&callback=userapi&key=QUgFYq4L5n89ZG2Ab&page=" + this.state.current, myFetchOptions).then(response => response.json()).then(allianList => {
			this.setState({
				allianList: allianList.data,
				total: allianList.total
			});
		});
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=region&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=1&page=" + this.state.current, myFetchOptions).then(response => response.json()).then(provinList => {
			this.setState({
				provinList: provinList.data
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
		const {provinList} = this.state;
		const {total} = this.state;
		console.log(total);
		console.log(provinList);
		console.log(inforList);
		console.log(allianList);
		
		let inforData = allianList && allianList.length || 0 ?
			
			allianList.map((allianItem, index) => {
				var src = allianItem && allianItem.logo? webSite+ allianItem.logo : require('../images/no_logo.jpg');				
				return <li>
					<Link to={`/allianDel/${allianItem.id}`}> 
						<div className={inforCss.allainImg}>
							<img src={src}/>
						</div>
						<div className={inforCss.allainInfor}>
							<h4>{allianItem.xhname}</h4>
							<p>{allianItem.street}</p>
							{/* <h5>{allianItem.phone}（{allianItem.linkname}）</h5> */}
							<span>{allianItem.email}</span>
						</div>
					</Link>
				</li>
			}) :
			<p className = {inforCss.loding} > 没有加载到任何信息 </p>;

			let provinDatas = provinList && provinList.length || 0 ?
				provinList.map((provinItem, index) => (
					<Menu.Item key={index}><span onClick={() => this.onScreen(provinItem.region_id)}>{provinItem.region_name}</span></Menu.Item>
				)) :
			<p className = {inforCss.loding} > 没有加载到任何信息 </p>;

		return(
			<div className={inforCss.infor_wrapper}>
                <div className={inforCss.child_width}>
					<div className={inforCss.child_title}>
                    	<h2><Link to={'/'}>首页 ></Link> &nbsp;<span>联盟成员</span></h2>
					</div>
					<div className={inforCss.inforContainer}>
						<div className={inforCss.infor_left}>
							<div className={inforCss.regionalSel}>
								<h3>联盟成员名单<span> ( 共{inforList.length}个 ) </span></h3>
								<div className={inforCss.classificat}>
									<div className={inforCss.regionTit}>
										地区分类：
									</div>
									
									<div className={inforCss.region_li}>
									<Menu
										theme="dark"
										mode="horizontal"
										defaultSelectedKeys={['0']}
										style={{ lineHeight: '22px' }}
									>
										{provinDatas}
									</Menu>
										
									</div>
								</div>
							</div>
							<div className={inforCss.allainList}>
								<ul>
									{inforData}
									
								</ul>
							</div>
							
							<div className={inforCss.paginAtion}>
								<Pagination  defaultCurrent={1} onChange={this.onChange} total={total} />
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

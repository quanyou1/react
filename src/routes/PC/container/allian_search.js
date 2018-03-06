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
			allianList: []
        };
        

    };

   
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=search&type=3&search=" +`${this.props.match.params.dataSource}` + "&callback=userapi&key=QUgFYq4L5n89ZG2Ab", myFetchOptions).then(response => response.json()).then(allianList => {
			this.setState({
				allianList: allianList.data
			});
			console.log(allianList);
        });
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=news&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=1", myFetchOptions).then(response => response.json()).then(inforList => {
			this.setState({
				inforList: inforList.data
			});
			console.log(inforList);
        });

        

	};

    
	render() {
		var webSite = "http://www.nscca.cn";
		const {allianList} = this.state;
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
			<div className={inforCss.no_search}>
				<p>搜索不到<span>“{this.props.match.params.dataSource}”</span>的内容</p>
				<h3>建议您修改下搜索关键词</h3>
			</div>;

			

		return(
			<div className={inforCss.infor_wrapper}>
                <div className={inforCss.child_width}>
					<div className={inforCss.child_title}>
                    	<h2><Link to={'/'}>首页 ></Link> &nbsp;<span>搜素：{this.props.match.params.dataSource}</span></h2>
					</div>
					<div className={inforCss.inforContainer}>
						<div className={inforCss.infor_left}>
							<div className={inforCss.regionalSel}>
								{/* <h3>联盟成员名单<span> ( 共{allianList.length}个 ) </span></h3> */}
								{/* <div className={inforCss.classificat}>
									<div className={inforCss.regionTit}>
										地区分类：
									</div>
									<div className={inforCss.region_li}>
										<ul>   
											<li>全国</li>
											<li>北京</li>
											<li>福建</li>
											<li>甘肃</li>
											<li>广东</li>
											<li>广西</li>
											<li>贵州</li>
											<li>海南</li>
											<li>河北</li>
											<li>河南</li>
											<li>黑龙江</li>
											<li>湖北</li>
											<li>江苏</li>
											<li>辽宁</li>
											<li>内蒙古</li>
											<li>宁夏</li>
											<li>青海</li>
											<li>山东</li>
											<li>山西</li>
											<li>陕西</li>
											<li>江西</li>
											<li>云南</li>
											<li>上海</li>
											<li>香港</li>
											<li>澳门</li>
											<li>湖南</li>
											<li>吉林</li>
											<li>西藏</li>
											<li>天津</li>
											<li>重庆</li>
											<li>浙江</li>
											<li>贵州</li>
											<li>海南</li>
											<li>河北</li>
											<li>河南</li>
											<li>黑龙江</li>
											<li>辽宁</li>
											<li>四川</li>
										</ul>
									</div>
								</div> */}
							</div>
							<div className={inforCss.allainList}>
								<ul>
									{inforData}
									
								</ul>
							</div>
							
							<div className={inforCss.paginAtion}>
								<Pagination defaultCurrent={1} total={inforList.length} />
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

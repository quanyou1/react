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
			current: 1
		};
		this.onChange = (page) => {
			console.log(page);
			this.setState({
				current: page,
			});
		}
        

    };

   
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=search&type=1&search=" +`${this.props.match.params.dataSource}` + "&callback=userapi&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(inforList => {
			this.setState({
				inforList: inforList.data
			});
			console.log(inforList);
        });

        

	};

    
	render() {
		var webSite = "http://www.nscca.cn";
		const {inforList} = this.state;
		console.log(inforList);
		
		let inforData = inforList && inforList.length || 0 ?
			inforList.map((inforItem, index) => (
				<li>
					<Link to={`/inforDel/资讯/${inforItem.id}`} id={inforItem.id}>
						<div className={inforCss.inforImg}>
							<img src={webSite + inforItem.banners}/>
						</div>
						<div className={inforCss.inforDel}>
							<h3>{inforItem.title}</h3>
							<p>{inforItem.summary}</p>
							<span>{inforItem.start_time}</span>
						</div>
					</Link>
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
                    	<h2><Link to={'/'}>首页 ></Link> &nbsp;<span>{this.props.match.params.dataSource}</span></h2>
					</div>
					<div className={inforCss.inforContainer}>
						<div className={inforCss.infor_left}>
							<div className={inforCss.inforList}>
								<ul>
									{inforData}
									
								</ul>
							</div>
							<div className={inforCss.paginAtion}>
								<Pagination defaultCurrent={1} current={this.state.current} onChange={this.onChange} total={inforList.length} />
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

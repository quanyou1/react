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
			inforAll: [],
			current: 1
		};
        

	};
	
	onChange = (page) => {
		console.log(page);
		
		this.setState({
			current: page
		});
		console.log(this.state.current)
		this.getData(page);
	}

   getData(page) {
		var webSite = "http://www.nscca.cn";
		   let { current } = this.state
		   console.log(this.state.current)

   		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=news&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=" + this.props.p +"&page=" +page).then(response => response.json()).then(inforList => {
			this.setState({
				inforList: inforList.data
			});
			console.log(inforList)
        });
		
   }

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};

		fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=newslist&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=" + this.props.p +"&page=" + this.state.current, myFetchOptions).then(response => response.json()).then(inforList => {
			this.setState({
				inforList: inforList.data
			});
			console.log(inforList);
        });
		
		fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=newslist&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=" + this.props.p, myFetchOptions).then(response => response.json()).then(inforAll => {
			this.setState({
				inforAll: inforAll.data
			});
			console.log(inforAll);
        });

        

	};

    
	render() {
		var webSite = "http://www.nscca.cn";
		const {inforList} = this.state;
		const {inforAll} = this.state;
		
		let inforData = inforList && inforList.length || 0 ?
			inforList.map((inforItem, index) => (
				<li>
					<Link to={`/inforDel/${this.props.cartTitle}/${inforItem.id}`} id={inforItem.id}>
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
		<p className = {inforCss.loding} > 没有加载到任何信息 </p>;

		return(
			<div className={inforCss.infor_wrapper}>
                <div className={inforCss.child_width}>
					<div className={inforCss.child_title}>
                    	<h2><Link to={'/'}>首页 ></Link> &nbsp;<span>{this.props.cartTitle}</span></h2>
					</div>
					<div className={inforCss.inforContainer}>
						<div className={inforCss.infor_left}>
							<div className={inforCss.inforList}>
								<ul>
									{inforData}
								</ul>
							</div>
							<div className={inforCss.paginAtion}>
								<Pagination current={this.state.current} defaultCurrent={1} onChange={this.onChange}  total={inforAll.length} />
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

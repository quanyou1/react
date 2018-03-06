import { connect } from 'dva';
import inforCss from './children.less';
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
import { Pagination, Icon } from 'antd';
import NewDynamic from './newDynamic';


class inforDel extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			detailInfor:[],
			tag: []
        };
        

    };

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=newsinfo&newsid="+`${this.props.match.params.id}`+"&callback=userapi&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(detailInfor => {
			this.setState({
				detailInfor: detailInfor.data,
				tag: detailInfor.data.tag
			});
			console.log(detailInfor);
        });

        

	};
	createMarkup() {
		return {__html: this.state.detailInfor.content};
	};

    
	render() {
		var webSite = "http://www.nscca.cn";
		const {detailInfor} = this.state;
		const {tag} = this.state;
		console.log(tag);
		console.log(detailInfor);
		
		let wordKey = tag && tag.length || 0 ?
			tag.map((wordKeyItem, index) => (
				<li>
					{wordKeyItem}
				</li>
			)) :
		<p className = {inforCss.Keylood} > 没有加载到任何关键词 </p>;

		const detailData = <div className={inforCss.child_width}>
			<div className={inforCss.child_title}>
				<h2><Link to={'/'}>首页 ></Link> {this.props.match.params.inforTit} > &nbsp;<span>详情</span></h2>
			</div>
			<div className={inforCss.inforDel_wrapper}>
				<div className={inforCss.detalContainer}>
					<div className={inforCss.detailTit}>
						<h2>{detailInfor.title}</h2>
						<p className={inforCss.source}>
							{detailInfor.start_time}<span>来源：&nbsp;{detailInfor.from}</span>
						</p>
					</div>
					<div className={inforCss.detalInfor}>
						<div className={inforCss.abstract}>
							摘要: {detailInfor.summary}
						</div>
						<div className={inforCss.articleContainer} dangerouslySetInnerHTML={this.createMarkup()}></div>
						
						<div className={inforCss.share}>
							<div className={inforCss.wordKey}>
								<span>关键词：</span>
								<ul>
									{wordKey}
								</ul>
							</div>
							{/* <div className={inforCss.share_infor}>
								<span>分享到:</span>
							</div> */}
						</div>
						{/* <div className={inforCss.thumbs_up}>
							<a href="javasctipr:;"><Icon type="like-o" /><span>赞：（20）</span></a>
							<a href="javasctipr:;" className={inforCss.dislike}><Icon type="dislike-o" /><span>踩：（2） </span></a>
						</div> */}
					</div>
				</div>
				<NewDynamic />
			</div>
		</div>
		
	
		return(
			<div className={inforCss.infor_wrapper}>
				{detailData}
                
            </div>
		);
	}
}

  

export default inforDel;

import { connect } from 'dva';
import inforCss from './children.less'
import fetchJsonp from 'fetch-jsonp';
// import { Tabs, Carousel, Icon } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
import { Pagination, Icon } from 'antd';
import NewDynamic from './newDynamic';



class inforList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            expertDate: []
        };    

    };

   
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=expertinfo&id="+`${this.props.match.params.id}`+"&callback=userapi&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(expertDate => {
			this.setState({
				expertDate: expertDate.data
			});
			console.log(expertDate);
		});
	};

    
	render() {
		var webSite = "http://www.nscca.cn";
		const {expertDate} = this.state;
		console.log(expertDate);
		return(
			<div className={inforCss.infor_wrapper}>
                <div className={inforCss.child_width}>
					<div className={inforCss.child_title}>
                    	
					</div>		
						<div className={inforCss.infor_left}>
							
							<div className={inforCss.consortList}>
								<ul>
									<li>
										<div className={inforCss.expertImg}>
											<img src={require('../images/icon_portrait.png')} />
										</div>
										<div className={inforCss.expert_infor}>
											<h3>{expertDate.name}</h3>
											<p>学历：{expertDate.education}</p>
											<p>专业：{expertDate.specialty}</p>
											<p>单位：{expertDate.company}</p>
											<p>职务：{expertDate.position}</p>
											<p>职称：{expertDate.position2}</p>
											<p>推荐单位：{expertDate.units}</p>
										</div>
									</li>
								</ul>
								<Link to={'/expertData'} >
									<div className={inforCss.view_more}>
										查看全部&nbsp;<Icon type="arrow-right" />
									</div>
								</Link>
							</div>
							
						</div>
						
					
				</div>
            </div>
		);
	}
}
export default inforList;

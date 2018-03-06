import { connect } from 'dva';
import inforCss from './children.less'
import fetchJsonp from 'fetch-jsonp';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';


class newsDynamic extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			newsDynamic: []
        };
        

    };

   
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=news2&callback=userapi&key=QUgFYq4L5n89ZG2Ab&l=10", myFetchOptions).then(response => response.json()).then(newsDynamic => {
			this.setState({
				newsDynamic: newsDynamic.data
			});
			console.log(newsDynamic);
        });

        

	};



    
	render() {
		const {newsDynamic} = this.state;
		console.log(newsDynamic);
		var webSite = "http://www.nscca.cn";
		
		let dynamicData = newsDynamic && newsDynamic.length || 0 ?
			newsDynamic.map((dynamicItem, index) => (
				<li>
					<Link target="_blank" to={`/inforDel/最新动态/${dynamicItem.id}` } id={dynamicItem.id}>
						<img src={webSite + dynamicItem.banners}/>
						<p>{dynamicItem.title}</p>
					</Link>
				</li>
			)) :
		<p className = {inforCss.Keylood} > 没有加载到任何动态 </p>;

		
		
		return(
			
			<div className={inforCss.infor_right}>
				<h3>最新动态</h3>
				<div className={inforCss.news_dynamic}>
					<ul>
						{dynamicData}
						
					</ul>
				</div>
			</div>

		);
	}
}

  

export default newsDynamic;

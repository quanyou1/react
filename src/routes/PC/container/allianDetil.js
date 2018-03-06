import { connect } from 'dva';
import inforCss from './children.less';
import fetchJsonp from 'fetch-jsonp';
import Slider from 'slider';
import { Icon, Button, Radio, Menu, Carousel, Card, map, Switch } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react';
import NewDynamic from './newDynamic';


class inforList extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			allianDel: [],
			p:1,
			addClass: false,
			historyData:[],
			more_pic:[],
			listnewsItem:[],
			represen: []
        };
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
		this.open = this.open.bind(this)
	};

	
	
	

    next() {
        this.slider.innerSlider.slickNext()
	}
	
	open() {
        $('.briefCont span').className('cs');
	}

    previous() {
        this.slider.innerSlider.slickPrev()
	}
	
	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
    }
   

	componentDidMount() {
		var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=memberinfo&callback=userapi&uid=" +`${this.props.match.params.id}` + "&key=QUgFYq4L5n89ZG2Ab", myFetchOptions).then(response => response.json()).then(allianDel => {
			this.setState({
				allianDel: allianDel.data,
				listnewsItem: allianDel.news,
				historyData: allianDel.data.history,
				more_pic: allianDel.data.more_pic,
				represen: allianDel.tpic
			});
        });

        

	};

	
	componentWillMount(){
		
	};

	createMarkup() {
		return {__html: this.state.allianDel.content};
	};

	categoryUp() {
		return {__html: this.state.allianDel.servecon};
	};

    
	render() {
		
		var webSite = "http://www.nscca.cn";
		const {allianDel} = this.state;
		const {historyData} = this.state;
		const {more_pic} = this.state;
		const {listnewsItem} = this.state;
		const {represen} = this.state;
		console.log(listnewsItem);
		console.log(allianDel);
		console.log(historyData);
		console.log(historyData.length);
		console.log(more_pic);
		console.log(represen);
		var settings = {
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay:true,
			nextArrow:true,
			swipe:true,
			autoplaySpeed: 3000
		  };
		  let history = historyData && historyData.length || 0 ?
			historyData.map((historyItem, index) => (
				<li>
					<div className={inforCss.courseTime}>
					
						<span>{historyItem.create_time}</span>
					</div>
					<div className={inforCss.course_infor}>
						<p>{historyItem.title}</p>
					</div>
				</li>    
			)) :
		<p className = {inforCss.loding} > 没有加载到任何信息 </p>;

		
		

		let wordKey = more_pic && more_pic.length || 0 ?
			more_pic.map((wordKeyItem, index) => (
				<li>
					<div className={inforCss.bannerImg}>
						<img src={webSite+wordKeyItem} />
					</div>
				</li>
			)) :
		'';

		let repreKey = represen && represen.length || 0 ?
			represen.map((repreItem, index) => (
				<li>
					<img src={webSite + repreItem.user_pic1}/>
					<h4>{repreItem.user_title1}</h4>
					<p>{repreItem.user1}</p>
				</li>
			)) : '';
		
		
		let newsItems = listnewsItem && listnewsItem.length || 0 ?
			listnewsItem.map((newItem, index) => (
				<li>
					<Link to={`/inforDel/最新动态/${newItem.id}`} id={newItem.id}>
						<p><span>>></span>{newItem.title}</p>
						<h4>{newItem.start_time}</h4>
					</Link>
					
				</li>
				
			)) :
		<p className = {inforCss.Keylood} >暂无相关资讯 </p>;

		var src = allianDel && allianDel.logo? webSite+ allianDel.logo : require('../images/no_logo.jpg');

		return(
			
			<div className={inforCss.infor_wrapper}>
                <div className={inforCss.child_width}>
					<div className={inforCss.alldel_wrapper}>
						<div className={inforCss.allianInfor}>
							<div className={inforCss.allian_logo}>
								<img src={src}/>
							</div>
							<div className={inforCss.allain_data}>
								<h2>{allianDel.xhname}</h2>
								<div className={inforCss.dataInfor}>
									{/* <div className={inforCss.data_mail}>
										<p>联系人：{allianDel.linkname}</p>
										<p>E-mail：{allianDel.email}</p>
									</div>
									<div className={inforCss.data_address}>
										<p>电话：{allianDel.phone}</p>
										<p>地址：{allianDel.region_name}省{allianDel.cityname}市{allianDel.street}</p>
									</div> */}
									<div className={inforCss.data_address}>
										<p>E-mail：{allianDel.email}</p>
										<p>地址：{allianDel.region_name}省{allianDel.cityname}市{allianDel.street}</p>
									</div>
								</div>
							</div>
						</div>
						<div className={inforCss.assdel_introduct}>
							<h3>协会介绍</h3>
							<div className={inforCss.briefCont}>
								<div className={inforCss.introduces} dangerouslySetInnerHTML={this.createMarkup()}></div>
								{/* <a href="javascript:;" onClick={this.open} >[展开]</a> */}
								
								{/* <div className={inforCss.allianBanner}>
									<Carousel ref={c => this.slider = c } {...settings}>
										{wordKey}
									</Carousel>
									
									<div className={inforCss.banner_right} onClick={this.next}>
										<Icon type="right" />
									</div>
									<div className={inforCss.banner_left} onClick={this.previous}>
										<Icon type="left" />
									</div>
								</div> */}
							</div>
						</div>
						<div className={inforCss.represent}>
							<h3>协会代表</h3>
							<div className={inforCss.repres_li}>
								<ul>
									{repreKey}
									
								</ul>
							</div>
						</div>
						<div className={inforCss.category}>
							<h3>服务范畴</h3>
							<div className={inforCss.category_infor}>
								<div className={inforCss.category_Container} dangerouslySetInnerHTML={this.categoryUp()}></div>
							</div>
						</div>
						<div className={inforCss.historyDev}>
							<h3>发展历程</h3>
							<div className={inforCss.history_course}>
								<ul>
									{history}
									
								</ul>
							</div>
						</div>
						<div className={inforCss.relevant}>
							<h3>相关资讯</h3>
							<div className={inforCss.relevant_infor}>
								<ul>
									{newsItems}
									
								</ul>
							</div>
						</div>
					</div>
				</div>
            </div>
		);
	}
}

  

export default inforList;

import { connect } from 'dva';
import styles from './container.less'
import fetchJsonp from 'fetch-jsonp';
import { Tabs, Carousel, Icon, Button, Menu, Card } from 'antd';
import { Router, Route, Link, hashHistory } from 'dva/router'
import React, { Component } from 'react'
import Slider from 'slider'
import AllianSwitch  from './allianSwitch'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const Products = (props) => (
    
    // <div className={styles.ne + ' ' + styles.containers}>
    <div className={styles.classname}>
        <Apps />
    </div>

);





class Apps extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
            comments: [],
            banner: [],
            p: 1,
            partner: [],
            allianDyn: [],
            industryIn: [],
            memDynam: [],
            expertData: [],
            unionMen: '',
            unionPage: "",
            tools: []
        };
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)

        this.allian_next = this.allian_next.bind(this)
        this.allian_prev = this.allian_prev.bind(this)
    };

   
    
    next() {
        this.sliders.innerSlider.slickNext()
    }

    previous() {
        this.sliders.innerSlider.slickPrev()
    }

    allian_next() {
        this.slider.innerSlider.slickNext()
    }

    allian_prev() {
        this.slider.innerSlider.slickPrev()
    }

    onExprt = () => {
		this.getData();
	}

    getData() {
        var webSite = "http://www.nscca.cn";

        fetchJsonp(webSite + "/index.php?m=home&c=homeapi&a=expert&callback=userapi&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(expertData => {
            this.setState({
                expertData: expertData.data
            });
            console.log(expertData)
        });
            
    }

	componentDidMount() {
        var webSite = "http://www.nscca.cn";
		var myFetchOptions = {

		};
		
		fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=member&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=" + this.state.p, myFetchOptions).then(response => response.json()).then(comments => {
			this.setState({
				comments: comments.data
			});
        });

        fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=topbanner&callback=userapi&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(banner => {
			this.setState({
				banner: banner.data
			});
        });
        
        fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=lmlink&callback=userapi&key=QUgFYq4L5n89ZG2Ab").then(response => response.json()).then(partner => {
			this.setState({
				partner: partner.data
			});
        });
        
        fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=news&l=5&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=1").then(response => response.json()).then(allianDyn => {
			this.setState({
				allianDyn: allianDyn.data
			});
        });

        fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=member&callback=userapi&key=QUgFYq4L5n89ZG2Ab&page=1").then(response => response.json()).then(unionMen => {
			this.setState({
				unionMen: unionMen.count
			});
            
        });
        
        fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=news&l=5&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=2").then(response => response.json()).then(industryIn => {
			this.setState({
				industryIn: industryIn.data
			});

        });
        
        fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=news&l=5&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=3").then(response => response.json()).then(memDynam => {
			this.setState({
				memDynam: memDynam.data
			});

        });
        
        fetchJsonp(webSite +"/index.php?m=home&c=homeapi&a=expert&callback=userapi&key=QUgFYq4L5n89ZG2Ab&p=1").then(response => response.json()).then(expertData => {
			this.setState({
				expertData: expertData.data
			});

        });
        

	};

	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
    } 
    
	render() {
        
        var webSite = "http://www.nscca.cn";
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

      var allianSets = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:true,
        swipe:true,
        autoplaySpeed: 3000
      };
        const {comments} = this.state;
        const {partner} = this.state;
        const {allianDyn} = this.state;
        const {industryIn} = this.state;
        const {memDynam} = this.state;
        const {expertData} = this.state;
        const {unionPage} = this.state;
        const {banner} = this.state;
        const {unionMen} = this.state;
      console.log(expertData)

		const styleImage = {
			display: 'inline-block',
			background: '#ECECEC',
			padding: '10px'
		};

		const card = {
			width: '290px'
        };
        
        

		let newsList = comments && comments.length || 0 ?
			comments.map((newsItem, index) => (
				<div key={index} className={styles.card} style={styleImage}>
          <Card title={newsItem.name} bordered={false} className={styles.titles} style={card} >
            <a href={"http://51kufei.com"+newsItem.url}> 
              <img src={this.webSite + newsItem.logo} className={styles.img} />
              <p className={styles.items}>{newsItem.summary}</p>
            </a>
          </Card>
        </div>
			)) :
            <p className = {styles.loding} > 没有加载到任何新闻 </p>;
            
            

            let bannerList = banner && banner.length || 0 ?
                banner.map((bannerItem, index) => (
                    <div className={styles.bannerImg}>
                        <a href={bannerItem.url}>
                            <img src={webSite + bannerItem.banners}/>
                            <p></p>
                            <h3>{bannerItem.title}</h3>
                        </a>
                    </div>
                )) :<p></p>;

                
                let partnerList = partner && partner.length || 0 ?
                    partner.map((partnerItem, index) => (
                        <li id={partnerItem.id}><a href={partnerItem.weburl} target="_blank">{partnerItem.name}</a></li>    
                    )) :
                    <p className = {styles.loding} > 没有加载到任何合作伙伴 </p>;
                    

                let expertList = expertData && expertData.length || 0 ?
                    expertData.map((experItem, index) => (
                        <li>
                            <Link to={`/expert_detail/${experItem.id}`} id={experItem.id} className={styles.expert_infor}>
                                <div className={styles.expertImg}></div>
                                <div className={styles.mendUnit}>
                                    <p>{experItem.name}<span>{experItem.position}</span></p>
                                    <h4>推荐单位：{experItem.units}</h4>
                                </div>
                                <Icon type="right" className={styles.rightIon} />
                            </Link>
                        </li>
                    )) :
                <p className = {styles.loding} > 没有加载到任何专家 </p>;

               

            let allianData =  allianDyn && allianDyn.length || 0 ?
                allianDyn.map((allianItem, index) => (
                    <li>
                        <Link to={`/inforDel/联盟动态/${allianItem.id}`} className={styles.allian_wrapper} id={allianItem.id}>
                        
                            <div className={styles.allianImg}>
                                <img src={webSite + allianItem.banners}/>
                            </div>
                            <div className={styles.allianInfor}>
                                <h3>{allianItem.title}</h3>
                                <p>
                                    {allianItem.summary}<span>【详情】</span>
                                </p>
                                <h5>{allianItem.start_time}</h5>
                            </div>
                        </Link>
                    </li>    
                )) :
            <p className = {styles.loding} > 没有加载到任何联盟动态 </p>;

            

            let industryData = industryIn && industryIn.length || 0 ?
                industryIn.map((industryItem, index) => (
                    <li>
                        <Link to={`/inforDel/行业资讯/${industryItem.id}`} className={styles.allian_wrapper} id={industryItem.id}>
                            <div className={styles.allianImg}>
                                <img src={webSite + industryItem.banners}/>
                            </div>
                            <div className={styles.allianInfor}>
                                <h3>{industryItem.title}</h3>
                                <p>
                                    {industryItem.summary}<span>【详情】</span>
                                </p>
                                <h5>{industryItem.start_time}</h5>
                            </div>
                        </Link>
                    </li>    
                )) :
            <p className = {styles.loding} > 没有加载到任何行业资讯 </p>;

            

            let memDynamData = memDynam && memDynam.length || 0 ?
                memDynam.map((memDynamItem, index) => (
                    <li>
                        <Link to={`/inforDel/成员动态/${memDynamItem.id}`} className={styles.allian_wrapper} id={memDynamItem.id}>
                            <div className={styles.allianImg}>
                                <img src={webSite + memDynamItem.banners}/>
                            </div>
                            <div className={styles.allianInfor}>
                                <h3>{memDynamItem.title}</h3>
                                <p>
                                    {memDynamItem.summary}<span>【详情】</span>
                                </p>
                                <h5>{memDynamItem.start_time}</h5>
                            </div>
                        </Link>
                    </li>    
                )) :
            <p className = {styles.loding} > 没有加载到任何成员动态 </p>;

            

            let unionpage = unionMen && unionMen.length || 0 ?
                unionMen.map((i, index) => (
                    <ul><AllianSwitch page={i} /></ul>    
                )) :
            <p className = {styles.loding} > 没有加载到任何成员动态 </p>;

            
        

		return(
            
			<div className={styles.index_children}>
                <div className={styles.indx_width}>
                <div className={styles.introDuct}>
                        <div className={styles.bannerContainer}>
                            <div className={styles.carousel}>
                                <Carousel ref={c => this.sliders = c } {...settings}>
                                    {bannerList}
                                </Carousel>
                                <div className={styles.banner_right} onClick={this.next}>
                                    <Icon type="right" />
                                </div>
                                <div className={styles.banner_left} onClick={this.previous}>
                                    <Icon type="left" />
                                </div>
                            </div>
                        </div>
                
                        <div className={styles.enterPrise}>
                            <div className={styles.enterTitle}>
                                <p>联盟简介</p>
                                <Link to={'/aboutAll'}>更多 <Icon type="double-right" /></Link>
                            </div>
                            <div className={styles.enterInfor}>
                                <h4>全国城市安防协会合作互助联盟</h4>
                                <p>(National Security City Cooperative Alliance)主要是由全国各省市安防协会根据中华人民共和国民政部《社会团体登记管理条例》等社会团体相关法律法规签署协议自愿组成。
                                    联盟旨在联合、创新、发展；充分利用现有资源，实现资源优势共享; 促进联盟内成员联合创新、开拓新市场、形成产业群合力; 倡导和维护有序的市场竞争;
                                    从而促进安防产业发展，提升安防产业在国内外市场的整体竞争力。</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.member_wrapper}>
                <div className={styles.memberTitle}>
                    <p>联盟成员</p>
                    <Link to={'/allianMem'}>更多 <Icon type="double-right" /></Link>
                </div>
               
                <div className={styles.allianIn}>
                    <Carousel ref={a => this.slider = a } {...allianSets}>
                        {unionpage}
                    </Carousel>
                    <div className={styles.allian_right} onClick={this.allian_next}>
                        <Icon type="right" />
                    </div>
                    <div className={styles.allian_left} onClick={this.allian_prev}>
                        <Icon type="left" />
                    </div>
                </div>
            </div>
                    <div className={styles.dynamic_wrapper}>
                        <div className={styles.dynamic_left}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="行业资讯" key="1">
                                    <div className={styles.allDynam}>
                                        <ul>
                                           {industryData}
                                        </ul>
                                        <div className={styles.moreAllian}>
                                            <Link to={'/industInfor'} >
                                                查看更多行业资讯
                                            </Link>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="联盟动态" key="2">
                                    <div className={styles.allDynam}>
                                        <ul>
                                            {allianData}
                                        </ul>
                                        <div className={styles.moreAllian}>
                                            <Link to={'/alianceDyn'} >
                                                查看更多联盟动态
                                            </Link>
                                        </div>
                                    </div>
                                </TabPane>
                                
                                <TabPane tab="成员动态" key="3">
                                    <div className={styles.allDynam}>
                                        <ul>
                                           {memDynamData}
                                        </ul>
                                        <div className={styles.moreAllian}>
                                            <Link to={'/memberDyn'} >
                                                查看更多成员动态
                                            </Link>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                        <div className={styles.dynamic_right}>
                            <div className={styles.expertTit}>
                                <p>专家库</p>
                                <Link to={'/expertData'}>更多 <Icon type="double-right" /></Link>
                            </div>
                            <div className={styles.expert_wrapper}>
                                <ul>
                                    {expertList}
                                </ul>
                                <div className={styles.change} onClick={this.onExprt} >
                                    <Icon type="retweet" />
                                    <span>换一批</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.partner}>
                        <h3>合作伙伴</h3>
                        <div className={styles.partner_infor}>
                            <ul>
                                {partnerList}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
		);
	}
}

  

export default Apps;

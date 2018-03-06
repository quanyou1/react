import React from 'react';
// import { Router, Route, Switch } from 'dva/router';

import MediaQuery from 'react-responsive';

import PCIndex from './routes/PC/index';
import PCildren from './routes/PC/container/index_children';
import PcAbout from './routes/PC/container/about_children';
import PcExpert from './routes/PC/container/expertData';
import PcInfor from './routes/PC/container/infor_children';
import PcAlliance from './routes/PC/container/allianceDyn';
import PcAllianMem from './routes/PC/container/allianMem';
import PcmenDyn from './routes/PC/container/memberDyn';
import PcdustInfor from './routes/PC/container/industryInfor';
import Allian_search from './routes/PC/container/allian_search';
import Expert_search from './routes/PC/container/expert_search';
import Infor_search from './routes/PC/container/infor_search';
import PcInforDel from './routes/PC/container/inforDetail';
import Expert_detail from './routes/PC/container/expert_detail';
import AllianDetil from './routes/PC/container/allianDetil';
import Repos from './routes/mobile/IndexPage'
import mobIndex from './routes/mobile/IndexPage';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'

// function RouterConfig({ history }) {
//   return (
    // <div className="router">
    //   <MediaQuery query='(min-device-width: 1224px)'>
      
    //       <Router history={history}>
    //         <Switch>
    //           <Route path="/" exact render={props => <IndexPage {...props}><Repos /></IndexPage>}></Route>
    //           <Route path="/pc" component={PCIndex} />
    //         </Switch>
    //       </Router>
    //   </MediaQuery>
    //   <MediaQuery query='(max-device-width: 1224px)'>
    //        <Router history={history}>
    //         <Switch>
    //           <Route path="/" exact component={IndexPage} />
    //           <Route path="/mobile" exact component={mobIndex} />
    //         </Switch>
    //       </Router>
    //   </MediaQuery>
    // </div>
    
//   );
// }

// export default RouterConfig;
const AppRouter = () => {
  const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter
  return (
    
    <div className="router">
      {/* <MediaQuery query='(min-device-width: 1224px)'> */}
      
          <Router history={history}>
            <Switch>
              <Route path='/' exact render={props =><PCIndex {...props}><PCildren {...props} /></PCIndex>} />
              <Route path='/aboutAll' exact render={props =><PCIndex {...props}><PcAbout {...props} /></PCIndex>} />
              <Route path='/expertData' exact render={props =><PCIndex {...props}><PcExpert {...props} /></PCIndex>} />
              <Route path='/alianceDyn' exact render={props =><PCIndex {...props}><PcAlliance {...props} /></PCIndex>} />
              <Route path='/industInfor' exact render={props =><PCIndex {...props}><PcdustInfor {...props} /></PCIndex>} />
              <Route path='/allianMem' exact render={props =><PCIndex {...props}><PcAllianMem {...props} /></PCIndex>} />
              <Route path='/memberDyn' exact render={props =><PCIndex {...props}><PcmenDyn  {...props}/></PCIndex>} />
              <Route path='/inforAll' exact render={props =><PCIndex {...props}><PcInfor {...props}/></PCIndex>} />
              <Route path='/infor_search/1/' exact render={props =><PCIndex {...props}><Infor_search {...props} /></PCIndex>} />
              <Route path='/infor_search/1/:dataSource' exact render={props =><PCIndex {...props}><Infor_search {...props} /></PCIndex>} />
              <Route path='/infor_search/2/' exact render={props =><PCIndex {...props}><Expert_search {...props} /></PCIndex>} />
              <Route path='/infor_search/2/:dataSource' exact render={props =><PCIndex {...props}><Expert_search {...props} /></PCIndex>} />
              <Route path='/infor_search/3/' exact render={props =><PCIndex {...props}><Allian_search {...props} /></PCIndex>} />
              <Route path='/infor_search/3/:dataSource' exact render={props =><PCIndex {...props}><Allian_search {...props} /></PCIndex>} />
              <Route path='/inforDel/:inforTit/:id' exact render={props =><PCIndex {...props}><PcInforDel {...props} /></PCIndex>} />
              <Route path='/expert_detail/:id' exact render={props =><PCIndex {...props}><Expert_detail {...props} /></PCIndex>} />
              <Route path='/allianDel/:id' exact render={props =><PCIndex {...props}><AllianDetil {...props} /></PCIndex>} />
              <Route path='/pc' exact component={PCIndex}/>
            </Switch>
        </Router>
      {/* </MediaQuery> */}
          {/* <MediaQuery query='(max-device-width: 1224px)'>
           <Router history={history}>
            <Switch>
              <Route path='/' exact render={props => <Repos {...props}><Repos /></Repos>} />
              <Route path='/about' render={props => <IndexPage {...props}><Loadabout /></IndexPage>} />
              <Route path='/' exact component={mobIndex}/>
            </Switch>
          </Router> */}
      {/* </MediaQuery> */}
    </div>
    
  )
}

export default AppRouter

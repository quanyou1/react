import React from 'react';
import { connect } from 'dva';
import { Router, Route, Link, hashHistory } from 'react-router'




function IndexPage() {
  return (
    <div>
      <h1>Yay! Welcome to dva!  PC  zi /about</h1>
    
      
      
    </div>
  );
}



export default connect()(IndexPage);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import UserOnline from './UserOnline';
import UserCheck from './UserCheck';
import UserEdit from './UserEdit';
import UserFailcheck from './UserFailcheck';
import UserOffline from './UserOffline';
import UserLatest from './UserLatest';
import UserInfor from './UserInfor';
import UserPassword from './UserPassword';
import Adheader from './Adheader';


//import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/Footer" component={Footer}/>
    <Route path="/UserOnline" component={UserOnline}/>
    <Route path="/UserCheck" component={UserCheck}/>
    <Route path="/UserEdit" component={UserEdit}/>
    <Route path="/UserFailcheck" component={UserFailcheck}/>
    <Route path="/UserOffline" component={UserOffline}/>
    <Route path="/UserLatest" component={UserLatest}/>
    <Route path="/UserInfor" component={UserInfor}/>
    <Route path="/UserPassword" component={UserPassword}/>
    <Route path="/Adheader" component={Adheader}/>
  
    </Router>,document.getElementById('root')
);
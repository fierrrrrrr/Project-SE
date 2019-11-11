import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import User from './User';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';
import User5 from './User5';
import User6 from './User6';
import User7 from './User7';

//import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/Header" component={Header}/>
    <Route path="/Footer" component={Footer}/>
    <Route path="/User" component={User}/>
    <Route path="/User1" component={User1}/>
    <Route path="/User2" component={User2}/>
    <Route path="/User3" component={User3}/>
    <Route path="/User4" component={User4}/>
    <Route path="/User5" component={User5}/>
    <Route path="/User6" component={User6}/>
    <Route path="/User7" component={User7}/>
  
    </Router>,document.getElementById('root')
);
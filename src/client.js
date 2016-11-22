import React from 'react';
import ReactDOM from 'react-dom';

//import * as firebase from 'firebase';

import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'

import T from './components/T'
import NotFoundView from './components/NotFoundView'
import RequesterView from './components/RequesterView'
import WorkerView from './components/WorkerView'
import IndexView from './components/IndexView'
import AuthView from './components/AuthView'
import WorkerStoryView from './components/Worker/WorkerStoryView'

// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyDba-UFQTkLf_3D14fTOMl8Ed35e3wLK5Y",
//     authDomain: "letstory-52d57.firebaseapp.com",
//     databaseURL: "https://letstory-52d57.firebaseio.com",
//     storageBucket: "letstory-52d57.appspot.com",
//     messagingSenderId: "1059708952950"
// };
// firebase.initializeApp(config);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={T}>
        <IndexRoute component={IndexView}/>
        <Route path="worker" component={WorkerView}/>
        <Route path="requester" component={RequesterView}/>
        <Route path="auth" component={AuthView}/>
        <Route path="worker/story/*" component={WorkerStoryView}/>
        <Route path="*" component={NotFoundView}/>
    </Route>
  </Router>,
  document.getElementById('root')
);

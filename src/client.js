import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'

import T from './components/T'
import NotFoundView from './components/NotFoundView'
import RequesterView from './components/RequesterView'
import WorkerView from './components/WorkerView'
import IndexView from './components/IndexView'
import AuthView from './components/AuthView'
import WorkerStoryView from './components/Worker/WorkerStoryView'

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

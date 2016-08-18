import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Archives  from './pages/Archives.js';
import Featured  from './pages/Featured.js';
import Layout  from './pages/Layout.js';
import Settings  from './pages/Settings.js';
// import Bootstrap  from './vendor/bootstrap-without-jquery'

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component ={Layout}>
      <IndexRoute component ={Featured}></IndexRoute>
      <Route path="archives(/:article)" name ="archives" component ={Archives}></Route>
      <Route path="settings" name= "settings" component ={Settings}></Route>
    </Route>
  </Router>,
app);

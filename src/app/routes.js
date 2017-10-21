import React from 'react';
import { Route, IndexRoute, RouteHandler } from 'react-router';
import App from './app';
import Home from './components/home';
import Login from './components/login';
import {request} from './transportLayer';
import TaskPage from './components/task';
import AddUser from './components/addUser';
import RatigPage from './components/rating';
import Report from './components/report';
import RenderTask from './components/renderTask';





function getUsers(callback) {
  var host = 'http://localhost:3000'; 
  var url = host + '/api/user';
  var options = {method:'GET'};

  request(url, options, callback);
}

function getTasks(callback) {
  var host = 'http://localhost:3000'; 
  var url = host + '/api/task';
  var options = {method:'GET'};

  request(url, options, callback);
}

const state = {
  isAuthenticated: true
}

module.exports = (
  <Route path="/" component={App} >

    <IndexRoute component={Login} isAuthenticated={state.isAuthenticated} />
    <Route path="login" component={Login} isAuthenticated={state.isAuthenticated} />
    <Route path="home" component={Home} getUsers={getUsers} /> 
    <Route path="task/user/:id" component={TaskPage} getUsers={getUsers} getTasks={getTasks} /> 
    <Route path="add/user" component={AddUser} />
    <Route path="rating/user/:id" component={RatigPage} />
    <Route path="report" component={Report} />
    <Route path="render/task" component={RenderTask} getTasks={getTasks} />
  </Route>
);

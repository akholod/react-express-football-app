import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Team from './components/teams/TeamPage';
import Home from './components/home/HomePage';
import NotFound from './components/NotFoundPage';


const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='team/:compId/:teamName' component={Team}/>
    <Route path='*' component={NotFound}/>
  </Route>
);

export default routes;

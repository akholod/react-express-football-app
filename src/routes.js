import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Team from './components/Team';
import Home from './components/Home';


const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='team/:position' component={Team}/>
  </Route>
);

export default routes;

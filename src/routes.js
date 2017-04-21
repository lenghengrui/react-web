import * as React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Home from './containers/Home';

export default function Routes() {
  return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/hello" component={Hello}></Route>
        <Route path="/test" component={Test}></Route>
      </Router>
    ); 
}
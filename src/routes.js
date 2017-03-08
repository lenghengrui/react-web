import * as React from 'react';
import {Router, Route, browserHistory} from 'react-router';
// import conponents
import Hello from './containers/Hello/Hello';
import Test from './containers/Test/Test';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Hello}></Route>
    <Route path="/test" component={Test}></Route>
  </Router>
)
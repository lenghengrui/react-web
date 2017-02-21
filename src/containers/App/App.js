import React, {Component, PropTypes} from 'react';
import aa from '../../../public/images/aa.jpg';

export default class App extends Component {

  constructor (args) {
    super(args);
    this.state = {};
  }

  render () {
    return (
      <div>
        <img src={aa}/>
        <div>App html</div>
      </div>
    );
  }
}
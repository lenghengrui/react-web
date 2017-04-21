import * as React from 'react';
import Button from '../Button';
import ShowBar from '../ShowBar';

require('./index.scss');
let myImg = require(__dirname + '/Joker.jpg');

export default class Home extends React.Component {
  render () {
    console.log(myImg);
    return (
      <div>
        <ShowBar />
        <div>
          <Button buttonText="变黑" /><Button buttonText="变绿" />
        </div>
        <div>
          <img src={myImg} alt=""/>
        </div>
        <div>
          <button className="a">1</button>
          <button className="a">2</button>
        </div>
      </div>
    );
  }
}
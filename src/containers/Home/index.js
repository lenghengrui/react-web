import * as React from 'react';
import Button from '../Button';
import ShowBar from '../ShowBar';

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <ShowBar />
        <div>
          <Button buttonText="变黑" /><Button buttonText="变绿" />
        </div>
      </div>
    );
  }
}
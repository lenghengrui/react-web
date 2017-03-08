import * as React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';


class HelloV extends React.Component {

  constructor () {
    super();
    this.state = {
      pageName: 'Hello'
    };
  }
  
  render () {

    let color = this.props.color;
    let num = this.props.num;

    return (
      <div>
        Hello
        <div style={{width: '100px', height: '100px', backgroundColor: color}}></div>
        <button onClick={() => this.props.changeColor('yellow')}>变黄</button><button onClick={() => this.props.changeColor('green')}>变绿</button>
        <div>{num}</div>
        <button onClick={() => this.props.addNum()}>+</button><button onClick={() => this.props.deleteNum()}>-</button>
        <Link to="/test">to Test</Link> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.test.color,
    num: state.test.num
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addNum:  function () { return {type: 'add'} },
      deleteNum:  function () { return {type: 'de'} },
      changeColor:  function (color) { return {type: color, color: color} }
    },
    dispatch
  );
};

let Hello = connect(mapStateToProps, mapDispatchToProps)(HelloV);

export default Hello;


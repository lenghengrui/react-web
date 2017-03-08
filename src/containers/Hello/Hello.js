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

  changeNumber(op) {
    if (op === '-') {
      console.log(op);
      this.props.deleteNum();
      console.log('runed');
    } else {
      console.log(op);
      this.props.addNum();
      console.log('runed');
    }
  }
  
  render () {

    let {color, num} = this.props;

    return (
      <div>
        Hello
        <div style={{width: '100px', height: '100px', backgroundColor: color}}></div>
        <button onClick={() => this.props.changeColor('yellow')}>变黄</button><button onClick={() => this.props.changeColor('green')}>变绿</button>
        <div>{num}</div>
        <button onClick={() => this.changeNumber('+')}>+</button><button onClick={() => this.changeNumber('-')}>-</button>
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


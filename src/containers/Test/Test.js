import * as React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';


class TestV extends React.Component {

  constructor () {
    super();
    this.state = {
      pageName: 'Test'
    };
  }
  
  render () {

    let {color, num} = this.props;

    return (
      <div>
        Hello
        <div style={{width: '100px', height: '100px', backgroundColor: color}}></div>
        <button onClick={() => this.props.changeColor('yellow')}>变黄</button><button onClick={() => this.props.changeColor('green')}>变绿</button>
        <div>{num}</div>
        <button onClick={() => this.props.addNum()}>+</button><button onClick={() => this.props.deleteNum()}>-</button>
        <Link to="/">to Hello</Link>
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
      addNum:  () => ({ type: 'add' }),
      deleteNum:  () => ({ type: 'de' }),
      changeColor:  (color) => ({ type: color })
    },
    dispatch
  );
};

let Test = connect(mapStateToProps, mapDispatchToProps)(TestV);

export default Test;


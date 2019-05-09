import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressNumber } from '../actions/entryBufferActions';

class NumberButton extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-default" onClick={this.props.pressNumber}>
            1
        </button>
      </div>
    )
  }
}

const actionCreators = {
    pressNumber,
}

export default connect(null, actionCreators)(NumberButton);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRand } from '../actions/calcMemActions';

class RandButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.getRand();
    }

  render() {
    return (
      <div>
          <button type="button" className="btn btn-default col col-md-1" onClick={this.onClick}>
            RAND
        </button>  
      </div>
    );
  }
}

const actionCreators = {
    getRand,
}

export default connect(null, actionCreators)(RandButton);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Screen extends Component {
  render() {
    return (
      <div>
        <div className="well">
            {this.props.entryBuffer}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    entryBuffer: state.entryBuffer
});

export default connect(mapStateToProps)(Screen);

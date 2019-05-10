import React, { Component } from 'react';
import { connect } from 'react-redux';

class Screen extends Component {
  render() {
    let stackItems = 
        this.props.stack
            .map( (number, index) => {
                return (
                    <li className="list-group-item" key={index}>
                        {number}
                    </li>
                    );
            });

    return (
        <div className="panel panel-default">
            <ul className="list-group">
                {stackItems}
            </ul>
            <div className="panel-footer">
                {this.props.entryBuffer}
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return ({
        entryBuffer: state.calcMem.entryBuffer,
        stack: state.calcMem.stack,
    });
}

export default connect(mapStateToProps)(Screen);

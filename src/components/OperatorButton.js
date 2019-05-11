import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressOperator } from '../actions/calcMemActions';

class OperatorButton extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.pressOperator(this.props.action);
    }

    render() {
        return (
            <div>
                <button type="button" 
                    className="btn btn-default col col-md-1" 
                    onClick={this.onClick}
                >
                {this.props.symbol}
            </button>
            </div>
        );
    }
}

const actionCreators = {
    pressOperator,
}

export default connect(null, actionCreators)(OperatorButton);
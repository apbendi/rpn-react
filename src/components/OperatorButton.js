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
        this.props.pressOperator(this.props.operation);
    }

    render() {
        return (
            <div>
                <button type="button" 
                    className="btn btn-warning col col-md-1 col-sm-1 col-xs-2" 
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
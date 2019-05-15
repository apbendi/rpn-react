import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressUrnary } from '../actions/calcMemActions';

class UrnaryButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.pressUrnary(this.props.operation);
    }

    render() {
        return (
            <div>
                <button type="button" 
                        className="btn btn-info col col-md-1 col-sm-1 col-xs-2" 
                        onClick={this.onClick}>
                    {this.props.symbol}
                </button>
            </div>
        );
    }
}

const actionCreators = {
    pressUrnary,
}

export default connect(null, actionCreators)(UrnaryButton);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressDecimal } from '../actions/calcMemActions';

class DecimalButton extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.pressDecimal();
    }

    render() {
        return (
            <div>
                <button type="button" 
                        className="btn btn-default col col-md-1"
                        onClick={this.onClick}>
                    .
                </button>
            </div>
        );
    }
}

const actionCreators = {
    pressDecimal,
};

export default connect(null, actionCreators)(DecimalButton);

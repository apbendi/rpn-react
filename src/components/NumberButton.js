import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressNumber } from '../actions/entryBufferActions';

class NumberButton extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.pressNumber(this.props.number);
    }

    render() {
        return (
        <div>
            <button type="button" 
                    className="btn btn-default col col-md-1" 
                    onClick={this.onClick}
            >
                {this.props.number}
            </button>
        </div>
        )
    }
}

const actionCreators = {
    pressNumber,
}

export default connect(null, actionCreators)(NumberButton);

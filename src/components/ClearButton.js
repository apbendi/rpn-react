import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressClear } from '../actions/calcMemActions';

class ClearButton extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.pressClear();
    }

    render() {
        return (
        <div>
            <button type="button"
                    className="btn btn-default col col-md-1" 
                    onClick={this.onClick}>
                C
            </button>
        </div>
        );
    }
}

const actionCreators = {
    pressClear,
}

export default connect(null, actionCreators)(ClearButton);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressEnter } from '../actions/calcMemActions';

class EnterButton extends Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.pressEnter();
    }

    render() {
        return (
        <div>
            <button type="button" 
                    className="btn btn-success col col-md-1 col-sm-1 col-xs-2" 
                    onClick={this.onClick}
            >
                Enter
            </button>
        </div>
        );
    }
}

const actionCreators = {
    pressEnter,
}

export default connect(null, actionCreators)(EnterButton);

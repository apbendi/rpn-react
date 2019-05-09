import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressEnter } from '../actions/entryBufferActions';
import entryBufferReducer from '../reducers/entryBufferReducer';

class EnterButton extends Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.pressEnter(this.props.entryBuffer);
    }

    render() {
        return (
        <div>
            <button type="button" 
                    className="btn btn-default col col-md-1" 
                    onClick={this.onClick}
            >
                Enter
            </button>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    entryBuffer: state.entryBuffer
});

const actionCreators = {
    pressEnter,
}

export default connect(mapStateToProps, actionCreators)(EnterButton);

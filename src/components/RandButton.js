import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRand } from '../actions/calcMemActions';

class RandButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.getRand();
    }

    render() {
        let loadingIndicator = (<span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>);

        return (
            <div>
                <button type="button" className="btn btn-default col col-md-1" onClick={this.onClick}>
                    {this.props.isFetching ? loadingIndicator : ""}{" "}
                    RAND
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.interface.isFetchingRand,
});

const actionCreators = {
    getRand,
}

export default connect(mapStateToProps, actionCreators)(RandButton);

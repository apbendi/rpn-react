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

        if (this.props.isFetching) {
            return;
        }

        this.props.getRand();
    }

    render() {
        let loadingIndicator = (<span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>);
        let content = this.props.isFetching ? loadingIndicator : "RAND";
        return (
            <div>
                <button type="button" 
                        className="btn btn-info col col-md-1 col-sm-1 col-xs-2" 
                        onClick={this.onClick}>
                    {content}
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

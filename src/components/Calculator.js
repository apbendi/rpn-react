import React, { Component } from 'react';
import NumberButton from './NumberButton';
import Screen from './Screen';

class Calculator extends Component {
  render() {
    return (
        <div className="container">
            <Screen />
            <NumberButton />
        </div>
    );
  }
}

export default Calculator;
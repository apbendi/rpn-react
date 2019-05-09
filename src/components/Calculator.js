import React, { Component } from 'react';
import NumberButton from './NumberButton';
import Screen from './Screen';
import EnterButton from './EnterButton';

class Calculator extends Component {
  render() {
    return (
        <div className="container">
            <Screen />
            <div className="row">
                <NumberButton number={1} />
                <NumberButton number={2} />
                <NumberButton number={3} />
            </div>
            <div className="row">
                <NumberButton number={4} />
                <NumberButton number={5} />
                <NumberButton number={6} />
            </div>
            <div className="row">
                <NumberButton number={7} />
                <NumberButton number={8} />
                <NumberButton number={9} />
            </div>
            <div className="row">
                <NumberButton number={0} />
                <EnterButton />
            </div>
        </div>
    );
  }
}

export default Calculator;
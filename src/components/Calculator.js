import React, { Component } from 'react';
import NumberButton from './NumberButton';
import Screen from './Screen';
import EnterButton from './EnterButton';
import OperatorButton from './OperatorButton';
import ClearButton from './ClearButton';
import DecimalButton from './DecimalButton';

class Calculator extends Component {
  render() {
    return (
        <div className="container">
            <Screen />

            <div className="row">
                <NumberButton number={7} />
                <NumberButton number={8} />
                <NumberButton number={9} />
                <OperatorButton symbol={"/"} action={ (left, right) => left / right} />
            </div>
            
            <div className="row">
                <NumberButton number={4} />
                <NumberButton number={5} />
                <NumberButton number={6} />
                <OperatorButton symbol={"*"} action={ (left, right) => left * right} />
            </div>

            <div className="row">
                <NumberButton number={1} />
                <NumberButton number={2} />
                <NumberButton number={3} />
                <OperatorButton symbol={"-"} action={ (left, right) => left - right} />
            </div>
            
            <div className="row">
                <ClearButton />
                <NumberButton number={0} />
                <DecimalButton />
                <OperatorButton symbol={"+"} action={ (left, right) => left + right} />
            </div>

            <div className="row">
                <EnterButton />
            </div>
        </div>
    );
  }
}

export default Calculator;
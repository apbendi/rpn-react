import React, { Component } from 'react';
import { divide, multiply, subtract, add, negate, square, squareRoot } from './operations'
import NumberButton from './NumberButton';
import Screen from './Screen';
import EnterButton from './EnterButton';
import OperatorButton from './OperatorButton';
import ClearButton from './ClearButton';
import DecimalButton from './DecimalButton';
import UrnaryButton from './UrnaryButton';
import KeyHandler from './KeyHandler';
import RandButton from './RandButton';

class Calculator extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-xs-2 hidden-sm hidden-md hidden-lg hidden-xl"></div>
                <div className="col col-md-4 col-sm-4 col-xs-8" style={{padding: '0'}}>
                    <Screen />
                </div>
            </div>        

            <div className="row">
                <div className="col col-xs-2 hidden-sm hidden-md hidden-lg hidden-xl"></div>
                <NumberButton number={7} />
                <NumberButton number={8} />
                <NumberButton number={9} />
                <OperatorButton symbol={"/"} operation={ divide } />
            </div>
            
            <div className="row">
                <div className="col col-xs-2 hidden-sm hidden-md hidden-lg hidden-xl"></div>
                <NumberButton number={4} />
                <NumberButton number={5} />
                <NumberButton number={6} />
                <OperatorButton symbol={"*"} operation={ multiply } />
            </div>

            <div className="row">
                <div className="col col-xs-2 hidden-sm hidden-md hidden-lg hidden-xl"></div>
                <NumberButton number={1} />
                <NumberButton number={2} />
                <NumberButton number={3} />
                <OperatorButton symbol={"-"} operation={ subtract } />
            </div>
            
            <div className="row">
                <div className="col col-xs-2 hidden-sm hidden-md hidden-lg hidden-xl"></div>
                <ClearButton />
                <NumberButton number={0} />
                <DecimalButton />
                <OperatorButton symbol={"+"} operation={ add } />
            </div>

            <div className="row">
                <div className="col col-xs-2 hidden-sm hidden-md hidden-lg hidden-xl"></div>
                <EnterButton />
                <UrnaryButton symbol={"(-)"} operation={ negate } />
                <UrnaryButton symbol={"√‾‾"} operation={ squareRoot } />
                <UrnaryButton symbol={"x²"} operation={ square } />
            </div>

            <div className="row">
                <div className="col col-xs-2 hidden-sm hidden-md hidden-lg hidden-xl"></div>
                <div className="col col-md-3 col-sm-3 col-xs-6"></div>
                <RandButton />
            </div>

            <KeyHandler />
        </div>
    );
  }
}

export default Calculator;
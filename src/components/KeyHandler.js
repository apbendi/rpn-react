import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pressNumber, pressEnter, pressOperator, pressDecimal, pressUrnary, pressClear } from '../actions/calcMemActions';
import { add, subtract, multiply, divide, negate, square, squareRoot } from './operations';

class KeyHandler extends Component {
    constructor(props) {
        super(props);
        this.handleKey = this.handleKey.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKey, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKey, false);
    }

    handleKey(event) {
        let key = event.key;

        switch (key) {
            case "Enter":
                this.props.pressEnter();
                break;
            case "0": case "1": case "2": case "3": case "4":
            case "5": case "6": case "7": case "8": case "9":
                this.props.pressNumber(parseInt(key));
                break;
            case ".":
                this.props.pressDecimal();
                break;
            case "+":
                this.props.pressOperator(add);
                break;
            case "-":
                this.props.pressOperator(subtract);
                break;
            case "*":
                this.props.pressOperator(multiply);
                break;
            case "/": case "\\":
                this.props.pressOperator(divide);
                break;
            case "%":
                this.props.pressOperator( (left, right) =>  left % right );
                break;
            case "!":
                this.props.pressUrnary(negate);
                break;
            case "s": case "S": case "^":
                this.props.pressUrnary(square);
                break;
            case "r": case "R":
                this.props.pressUrnary(squareRoot);
                break;
            case "c": case "C":
                this.props.pressClear();
                break;
            default:
                break;
        }
    }

  render() {
    return (
      <div>
      </div>
    );
  }
}

const actionHandlers = {
    pressNumber,
    pressEnter,
    pressOperator,
    pressDecimal,
    pressUrnary,
    pressClear
}

export default connect(null, actionHandlers)(KeyHandler);

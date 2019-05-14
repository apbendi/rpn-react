import { PRESS_NUMBER, PRESS_ENTER, PRESS_OPERATOR, PRESS_CLEAR, PRESS_DECIMAL, PRESS_URNARY, GOT_RAND } from '../actions/types';
import { parse } from '@babel/core';

const EMPTY_BUFFER = "";

const initialState = {
    entryBuffer: EMPTY_BUFFER,
    stack: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case PRESS_NUMBER:
            return {
                entryBuffer: entryBufferPressNumber(state.entryBuffer, action.payload),
                stack: state.stack,
            }
        case PRESS_ENTER:
            return {
                entryBuffer: EMPTY_BUFFER,
                stack: stackPressEnter(state.stack, state.entryBuffer)
            }      
        case PRESS_OPERATOR:
            return {
                entryBuffer: entryBufferPressOperator(state.entryBuffer, state.stack.length),
                stack: stackPressOperator(state.stack, state.entryBuffer, action.payload.operation),
            }
        case PRESS_CLEAR:
            return {
                entryBuffer: EMPTY_BUFFER,
                stack: stackPressClear(state.stack, state.entryBuffer),
            }
        case PRESS_DECIMAL:
            return {
                entryBuffer: entryBufferPressDecimal(state.entryBuffer),
                stack: state.stack,
            }
        case PRESS_URNARY:
            return {
                entryBuffer: EMPTY_BUFFER,
                stack: stackPressUrnary(state.stack, state.entryBuffer, action.payload.operation),
            }
        case GOT_RAND:
            return {
                entryBuffer: EMPTY_BUFFER,
                stack: stackGotRand(state.stack, state.entryBuffer, action.payload.number),
            }
        default:
            return state;
    }
}

function entryBufferPressNumber(currentBuffer, nextNumber) {
    if (currentBuffer.includes(".") && 0 === nextNumber) {
        return currentBuffer + nextNumber.toString();
    }

    return parseFloat(currentBuffer + nextNumber.toString()).toString();
}

function entryBufferPressOperator(currentBuffer, stackLength) {
    if (stackLength === 0) {
        return currentBuffer;
    } else {
        return EMPTY_BUFFER;
    }
}

function entryBufferPressDecimal(currentBuffer) {
    if ("" === currentBuffer) {
        return "0.";
    } else if (currentBuffer.includes(".")) {
        return currentBuffer;
    } else {
        return currentBuffer + "."
    }
}

function stackPressEnter(currentStack, entryBuffer) {
    let newNumber = parseFloat(entryBuffer);

    if (isNaN(newNumber)) {
        return currentStack;
    }

    return [...currentStack, newNumber];
}

function stackPressOperator(currentStack, entryBuffer, operation) {
    let newStack = [...currentStack];
    let newNumber = parseFloat(entryBuffer);

    if (!isNaN(newNumber)) {
        newStack.push(newNumber);
    }

    if (newStack.length < 2) {
        return currentStack;
    }

    let right = newStack.pop();
    let left = newStack.pop();
    let newValue = operation(left, right);

    newStack.push(newValue);
    return newStack;
}

function stackPressClear(currentStack, entryBuffer) {
    if (entryBuffer !== EMPTY_BUFFER) {
        return currentStack;
    } else if (currentStack.length === 0) {
        return currentStack;
    }

    return currentStack.slice(0, currentStack.length - 1);
}

function stackPressUrnary(currentStack, entryBuffer, operation) {
    let newStack = [...currentStack];
    let newNumber = parseFloat(entryBuffer);

    if (!isNaN(newNumber)) {
        newStack.push(newNumber);
    }

    if (newStack.length < 1) {
        return currentStack;
    }

    let newValue = operation(newStack.pop());
    newStack.push(newValue);

    return newStack;
}

function stackGotRand(currentStack, entryBuffer, randValue) {
    let newStack = [...currentStack];
    let bufferNum = parseFloat(entryBuffer);

    if (!isNaN(bufferNum)) {
        newStack.push(bufferNum);
    }

    let randNum = parseFloat(randValue);

    if (!isNaN(randNum)) {
        newStack.push(randNum);
    }

    return newStack;
}

import { PRESS_NUMBER, PRESS_ENTER, PRESS_OPERATOR, PRESS_CLEAR } from '../actions/types';

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
                stack: stackPressOperator(state.stack, state.entryBuffer, action.payload),
            }
        case PRESS_CLEAR:
            return {
                entryBuffer: EMPTY_BUFFER,
                stack: stackPressClear(state.stack, state.entryBuffer),
            }
        default:
            return state;
    }
}

function entryBufferPressNumber(currentBuffer, nextNumber) {
    return parseInt(currentBuffer + nextNumber.toString()).toString();
}

function entryBufferPressOperator(currentBuffer, stackLength) {
    if (stackLength === 0) {
        return currentBuffer;
    } else {
        return EMPTY_BUFFER;
    }
}

function stackPressEnter(currentStack, entryBuffer) {
    let newNumber = parseInt(entryBuffer);

    if (isNaN(newNumber)) {
        return currentStack;
    }

    return [...currentStack, newNumber];
}

function stackPressOperator(currentStack, entryBuffer, operation) {
    let newStack = [...currentStack];
    let newNumber = parseInt(entryBuffer);

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

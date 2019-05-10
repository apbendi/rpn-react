import { PRESS_NUMBER, PRESS_ENTER, PRESS_OPERATOR } from '../actions/types';

const initialState = {
    entryBuffer: "",
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
                entryBuffer: initialState.entryBuffer,
                stack: stackPressEnter(state.stack, state.entryBuffer)
            }      
        case PRESS_OPERATOR:
            return {
                entryBuffer: entryBufferPressOperator(state.entryBuffer, state.stack.length),
                stack: stackPressOperator(state.stack, state.entryBuffer, action.payload),
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
        return initialState.entryBuffer;
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

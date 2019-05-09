import { PRESS_ENTER, PRESS_OPERATOR } from '../actions/types';

const initialStack = [];

export default function(stack = initialStack, action) {
    switch (action.type) {
        case PRESS_ENTER:
            return [...stack, action.payload];
        case PRESS_OPERATOR:
            if (stack.length < 2) {
                return stack;
            }
            
            let left = stack[stack.length - 1];
            let right = stack[stack.length - 2];
            let newValue = action.payload(left, right);

            let newStack = stack.slice(0, stack.length - 2)
            newStack.push(newValue);

            return newStack;
        default:
            return stack;
    }
}

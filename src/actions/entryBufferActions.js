import { PRESS_NUMBER, PRESS_ENTER, PRESS_OPERATOR } from './types';

export function pressNumber(number) {
    return {
        type: PRESS_NUMBER,
        payload: number,
    }
}

export function pressEnter(bufferNumber) {
    return {
        type: PRESS_ENTER,
        payload: bufferNumber,
    }
}

export function pressOperator(action) {
    return {
        type: PRESS_OPERATOR,
        payload: action,
    }
}

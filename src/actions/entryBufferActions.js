import { PRESS_NUMBER, PRESS_ENTER } from './types';

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

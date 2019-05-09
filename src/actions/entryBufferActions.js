import { PRESS_NUMBER, PRESS_ENTER } from './types';

export function pressNumber(number) {
    return {
        type: PRESS_NUMBER,
        payload: number,
    }
}

export function pressEnter() {
    return {
        type: PRESS_ENTER,
    }
}
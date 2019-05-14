import { PRESS_NUMBER, PRESS_ENTER, PRESS_OPERATOR, PRESS_CLEAR, PRESS_DECIMAL, PRESS_URNARY } from './types';

export function pressNumber(number) {
    return {
        type: PRESS_NUMBER,
        payload: number,
    }
}

export function pressEnter() {
    return {
        type: PRESS_ENTER
    }
}

export function pressOperator(operation) {
    return {
        type: PRESS_OPERATOR,
        payload: { operation, },
    }
}

export function pressClear() {
    return {
        type: PRESS_CLEAR,
    }
}

export function pressDecimal() {
    return {
        type: PRESS_DECIMAL,
    }
}

export function pressUrnary(operation) {
    console.log(this.operation);
    return {
        type: PRESS_URNARY,
        payload: { operation, },
    }
}

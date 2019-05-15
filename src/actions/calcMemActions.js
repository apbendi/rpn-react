import { PRESS_NUMBER, PRESS_ENTER, PRESS_OPERATOR, PRESS_CLEAR, 
         PRESS_DECIMAL, PRESS_URNARY, ASKED_RAND, GOT_RAND, } from './types';

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
    return {
        type: PRESS_URNARY,
        payload: { operation, },
    }
}

function askedRand() {
    return {
        type: ASKED_RAND,
    }
}

function gotRand(numberString) {
    return {
        type: GOT_RAND,
        payload: { number: numberString, },
    };
}

export function getRand() {
    return async function(dispatch) {
        dispatch(askedRand());
        
        let randURL = 'https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new';

        let response = await fetch(randURL, {
                                    method: 'GET',
                                    headers: {
                                        'content-type': 'text/plain;charset=UTF-8',
                                    }
                                });
        let number = await response.text();

        dispatch(gotRand(number));
    }
}

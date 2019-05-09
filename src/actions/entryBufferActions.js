import { PRESS_NUMBER } from './types';

export function pressNumber(number) {
    return {
        type: PRESS_NUMBER,
        payload: number,
    }
}
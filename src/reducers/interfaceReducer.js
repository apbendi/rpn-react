import { ASKED_RAND, GOT_RAND } from '../actions/types';

const initialState = {
    isFetchingRand: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ASKED_RAND:
            return {
                isFetchingRand: true,
            };
        case GOT_RAND:
            return {
                isFetchingRand: false,
            };
        default:
            return state;
    }
}

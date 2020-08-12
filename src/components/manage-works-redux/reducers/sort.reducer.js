import { CONSTANTS } from '../constants/constants';
let initial = -1;

const sortReducer = (state = initial, action) => {
    switch (action.type) {
        case CONSTANTS.CONTROL.SORT:
            state = action.sort;
            return state;
        default:
            return state;
    }
}

export default sortReducer;
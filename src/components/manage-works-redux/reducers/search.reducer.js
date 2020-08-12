import { CONSTANTS } from "../constants/constants";

let initial = '';

const SearchReducer = (state = initial, action) => {
    switch (action.type) {
        case CONSTANTS.CONTROL.SEARCH:
            state = action.search;
            return state;
        default:
            return state;
    }
}

export default SearchReducer;

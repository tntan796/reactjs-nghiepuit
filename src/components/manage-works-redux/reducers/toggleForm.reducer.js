const { CONSTANTS } = require("../constants/constants");

let initial = false;

const toggleFormReducer = (state = initial, action) => {
    switch(action.type) {
        case CONSTANTS.FORM.TOGGLE_FORM : 
            state = !state;
            return !state;
        case CONSTANTS.FORM.OPEN_FORM :
            state = true;
            return state;
        case CONSTANTS.FORM.CLOSE_FORM :
            state = false;
            return state;
        default:
            return state;
    }
}

export default toggleFormReducer;
const { CONSTANTS } = require("../constants/constants");

let initial = { 
    id: '',
    name: '',
    status: true
};
let workEditReducer = (state = initial, action) => {
    switch (action.type) {
        case CONSTANTS.WORK_LIST.UPDATE_WORK:
            state = action.work;
            return {...state};
        case CONSTANTS.WORK_LIST.RESET_UPDATE_WORK:
            state = initial;
            return {...state};
        default:
            return {...state};
    }
}

export default workEditReducer;
const { CONSTANTS } = require("../constants/constants");

let initial = {
        filterName: '',
        filterStatus: -1
};
let filterTableReducer = (state = initial, action) => {
    switch (action.type) {
        case CONSTANTS.WORK_LIST.FILTER_ON_TABLE:
            state = action.filter;
            return {...state};
        default:
            return {...state};
    }
}

export default filterTableReducer;
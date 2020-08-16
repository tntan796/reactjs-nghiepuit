import CONNECT_API_CONSTANTS from '../constants/connect-api.constants';
let initial = {};

const productReducer = (state = initial, action) => {
    switch(action.type) {
        case CONNECT_API_CONSTANTS.PRODUCT.DETAIL:
            Object.assign(state, action.product);
            return {...state};
        default: 
            return {...state};
    }
}

export default productReducer;
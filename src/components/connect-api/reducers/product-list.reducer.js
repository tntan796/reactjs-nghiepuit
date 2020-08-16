import CONNECT_API_CONSTANTS from '../constants/connect-api.constants';


let initial = [];

const productListReducer = (state = initial, action) => {
    switch (action.type) {
        case CONNECT_API_CONSTANTS.PRODUCT_LIST.GET:
            state = action.products;
            return state;
        case CONNECT_API_CONSTANTS.PRODUCT_LIST.DELETE:
            return state;
        case CONNECT_API_CONSTANTS.PRODUCT_LIST.ADD:
            return state;
        default:
            return state;
    }
}

export default productListReducer;
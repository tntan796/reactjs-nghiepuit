import CONNECT_API_CONSTANTS from '../constants/connect-api.constants';


let initial = [];

const productListReducer = (state = initial, action) => {
    switch (action.type) {
        case CONNECT_API_CONSTANTS.PRODUCT_LIST.SAVE_TO_STORE:
            state = action.products;
            return [...state];
        case CONNECT_API_CONSTANTS.PRODUCT_LIST.DELETE:
            let index = state.findIndex(product => product.id == action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case CONNECT_API_CONSTANTS.PRODUCT_LIST.ADD:
            state.push(action.product);
            return [...state];
        case CONNECT_API_CONSTANTS.PRODUCT_LIST.DETAIL:
            return {...action.product};
        default:
            return state;
    }
}

export default productListReducer;
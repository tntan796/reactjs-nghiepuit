import CONNECT_API_CONSTANTS from "../constants/connect-api.constants"
import callApi from '../utils/apiCaller.utils';


export const getListAction = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(saveListToStore(res.data));
        })
    }
}

export const saveListToStore = (products) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.SAVE_TO_STORE,
        products
    }
}

export const deleteProductItem = (id) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.DELETE,
        id
    }
}

export const addProductItem = (product) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.ADD,
        product
    }
}

export const editProductItem = (product) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.EDIT,
        product
    }
}
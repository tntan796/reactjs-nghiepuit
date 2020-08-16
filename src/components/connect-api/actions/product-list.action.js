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

export const deleteProductItemRequest = (id) => {
    return async (dispatch) => {
        await callApi(`products/delete/${id}`, 'DELETE', null);
        dispatch(deleteProductItem(id));
    }
}

export const deleteProductItem = (id) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.DELETE,
        id
    }
}

export const addProductItemRequest = (product) => {
    return async (dispatch) => {
        const productAdd = await callApi('products/add', 'POST', product);
        dispatch(addProductItem(productAdd.data));
    }
}

export const addProductItem = (product) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.ADD,
        product
    }
}

export const editProductItemRequest = (product) => {
    return async(dispatch) => {
        await  callApi('products/edit', 'POST', product);
        dispatch(editProductItem(product));
    }
}

export const editProductItem = (product) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.EDIT,
        product
    }
}

export const getProductDetailRequest = (id) => {
    return async (dispatch) => {
        const product = await callApi(`products/${id}`, 'GET', null);
        dispatch(getProductDetail(product.data));
    }
}

export const getProductDetail = (product) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT.DETAIL,
        product
    }
}
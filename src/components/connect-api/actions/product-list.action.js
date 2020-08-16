import CONNECT_API_CONSTANTS from "../constants/connect-api.constants"

export const getListAction = () => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.GET
    }
}

export const deleteProductItem = (id) => {
    return {
        type: CONNECT_API_CONSTANTS.PRODUCT_LIST.DELETE,
        id
    }
}
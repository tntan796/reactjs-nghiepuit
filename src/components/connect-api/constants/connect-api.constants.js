const CONNECT_API_CONSTANTS = {
    PRODUCT_LIST: {
        GET : 'get product list',
        SAVE_TO_STORE: 'save product to store',
        DELETE: 'delete product item',
        ADD: 'add new product',
        EDIT: 'update product',
    },
    PRODUCT: {
        DETAIL: 'get detail'
    },
    CONFIG: {
        PRODUCT: {
            BASE_API_URL: 'https://tano-api.herokuapp.com'
        },
        DEVELOP: {
            BASE_API_URL: 'http://localhost:3100'
        }
    }
}

export default CONNECT_API_CONSTANTS;
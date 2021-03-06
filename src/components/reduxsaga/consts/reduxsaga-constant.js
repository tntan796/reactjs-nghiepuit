const REDUX_SAGA_CONSTANTS = {
    LIST : {
        RESET_LIST: 'reset list',
        GET_LIST: 'get list',
        GET_LIST_SUCCESS: 'get list sucess',
        GET_LIST_FAIL: 'get list fail',
        GET_LIST_BY_STATUS: 'get list by status',
        ADD: 'add item to list',
        ADD_SUCCESS: 'add item to list success',
        ADD_FAIL: 'add item to list fail',
        EDIT: 'edit item to list', 
        EDIT_REQUEST: 'edit item to list request', 
        EDIT_SUCCESS: 'edit item to list sucess',
        EDIT_FAIL: 'edit item to list fail',
        DELETE: 'delete item in list',
        DELETE_SUCCESS: 'delete item in list success',
        DELETE_FAIL: 'delete item in list fail',
    },
    POPUP: {
        OPEN: 'open popup',
        CLOSE: 'close popup',
        TOGGLE: 'toggle popup'
    },
    FORM: {
        EDIT: 'edit task',
        ADD: 'add task'
    },
    MESSAGE: {
        ALERT: {
            ADD_SUCCESSFUL: 'Thêm mới thành công!',
            ADD_FAIL: 'Thêm mới thất bại!',
            UPDATE_SUCCESSFUL: 'Cập nhật thành công!',
            UPDATE_FAIL: 'Cập nhật thất bại!',
            DELETE_SUCCESS: 'Xóa thành công!',
            DELETE_FAIL: 'Xóa thất bại!'
        },
        CONFIRM: {
            DELETE: 'Bạn có chắc chắn muốn xóa?'
        }
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

export default REDUX_SAGA_CONSTANTS;
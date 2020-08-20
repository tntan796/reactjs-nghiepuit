import { REDUX_SAGA_CONSTANTS } from '../consts/reduxsaga-constant';

export const getList = () => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.GET_LIST
    }
}

export const getListByStatus = (status) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.GET_LIST_BY_STATUS,
        status
    }
}
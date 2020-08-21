import REDUX_SAGA_CONSTANTS from "../consts/reduxsaga-constant"

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

export const addTask = (task) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.ADD,
        task
    }
}

export const editTask = (task) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.EDIT,
        task
    }
}



export const deleteTask = (id) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.DELETE,
        id
    }
}
import REDUX_SAGA_CONSTANTS from "../consts/reduxsaga-constant"
import taskApiCaller from "../../connect-api/utils/apiCaller.utils"
import { ToastMessage } from "../utils/toast-message.helper";
import * as taskApi from '../services/manage-task.service';

export const resetListTask = () => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.RESET_LIST
    }
}

export const getListRequestSuccess = (tasks) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.GET_LIST_SUCCESS,
        payload: {tasks}
    }
}

export const getListRequestFail = (error) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.GET_LIST_FAIL,
        payload: {error}
    }
}

export const getListRequest = () => {
    return (dispatch) => {
        dispatch({type: REDUX_SAGA_CONSTANTS.LIST.GET_LIST});
        dispatch(resetListTask());
        taskApi.fetchListTask().then(result => {
            dispatch(getListRequestSuccess(result.data));
        }).catch(error => {
            dispatch(getListRequestFail(error));
        })
    }
}

export const getListByStatus = (status) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.GET_LIST_BY_STATUS,
        status
    }
}

export const addTaskRequest = (task) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.ADD,
        payload: {
            task
        }
    }
}

export const addTaskSuccess = (task) => {
    ToastMessage.success(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.ADD_SUCCESSFUL);
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.ADD_SUCCESS,
        payload: {
            task
        }
    }
}

export const addTaskFail = (error) => {
    ToastMessage.error(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.ADD_FAIL);
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.ADD_FAIL,
        payload: {
            error
        }
    }
}

export const editTaskRequest = (task) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.EDIT_REQUEST,
        payload: {
            task
        }
    }
}

export const editTaskSuccess = (task) => {
    ToastMessage.success(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.UPDATE_SUCCESSFUL);
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.EDIT_SUCCESS,
        task
    }
}


export const editTaskFail = (error) => {
    console.log('Delete Task Error:', error);
    ToastMessage.error(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.UPDATE_FAIL);
}

export const deleteTaskRequest = (id) => {    
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.DELETE,
        payload: {
            id
        }
    }
}

export const deleteTaskSuccess = (id) => {
    ToastMessage.success(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.DELETE_SUCCESS);
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.DELETE_SUCCESS,
        payload : {
            id
        }
    }
}

export const deleteTaskError = (error) => {
    console.log('Delete Task Error:', error);
    ToastMessage.error(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.DELETE_FAIL);
}
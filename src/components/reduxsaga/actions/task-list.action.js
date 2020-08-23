import REDUX_SAGA_CONSTANTS from "../consts/reduxsaga-constant"
import taskApiCaller from "../../connect-api/utils/apiCaller.utils"
import { ToastMessage } from "../utils/toast-message.helper";

export const getListRequest = () => {
    return (dispatch) => {
        return taskApiCaller('tasks', 'GET', null).then(result => {
            dispatch(getList(result.data));
        }).catch(error => {
            ToastMessage.error('Get list request fail!');
        });
    }
}

export const getList = (tasks) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.GET_LIST,
        tasks
    }
}

export const getListByStatus = (status) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.GET_LIST_BY_STATUS,
        status
    }
}

export const addTaskRequest = (task) => {
    return (dispatch) => {
        taskApiCaller('tasks/add', 'POST', task).then(res => {
            ToastMessage.success(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.ADD_SUCCESSFUL);
            dispatch(addTask(task));
        }).catch(error => {
            ToastMessage.error(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.ADD_FAIL);
        });
    }
}

export const addTask = (task) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.ADD,
        task
    }
}

export const editTaskRequest = (task) => {
    return (dispatch) => {
        taskApiCaller('tasks/edit' + task.id, 'POST', null).then(res => {
            ToastMessage.success(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.UPDATE_SUCCESSFUL);
            dispatch(editTask(res.data));
        }).catch(error => {
            ToastMessage.error(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.UPDATE_FAIL);
        })
    }
}

export const editTask = (task) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.EDIT,
        task
    }
}

export const deleteTaskRequest = (id) => {
    return (dispatch) => {
        taskApiCaller('tasks/delete/' + id, 'DELETE').then(res => {
            ToastMessage.success(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.DELETE_SUCCESS);
            dispatch(deleteTask(id));
        }).catch(error => {
            ToastMessage.success(REDUX_SAGA_CONSTANTS.MESSAGE.ALERT.DELETE_FAIL);
        })
    }
}

export const deleteTask = (id) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.DELETE,
        id
    }
}
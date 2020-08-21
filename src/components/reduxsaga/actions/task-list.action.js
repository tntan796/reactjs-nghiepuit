import REDUX_SAGA_CONSTANTS from "../consts/reduxsaga-constant"
import taskApiCaller from "../../connect-api/utils/apiCaller.utils"

export const getListRequest = () => {
    return (dispatch) => {
        return taskApiCaller('tasks', 'GET', null).then(result => {
            dispatch(getList(result.data));
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
            dispatch(addTask(task));
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
            dispatch(editTask(res.data));
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
            dispatch(deleteTask(id));
        })
    }
}

export const deleteTask = (id) => {
    return {
        type: REDUX_SAGA_CONSTANTS.LIST.DELETE,
        id
    }
}
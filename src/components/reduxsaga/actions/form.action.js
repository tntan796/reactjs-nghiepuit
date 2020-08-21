import REDUX_SAGA_CONSTANTS from '../consts/reduxsaga-constant';

export const editTask = (task) => {
    return {
        type: REDUX_SAGA_CONSTANTS.FORM.EDIT,
        task
    }
}


export const addTask = () => {
    return {
        type: REDUX_SAGA_CONSTANTS.FORM.ADD
    }
}
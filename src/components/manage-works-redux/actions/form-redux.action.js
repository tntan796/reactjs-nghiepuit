import { CONSTANTS } from "../constants/constants"

export const addWork = (work) => {
    return {
        type: CONSTANTS.FORM.ADD,
        work
    }
};

export const editWork = (work) => {
    return {
        type: CONSTANTS.FORM.EDIT,
        work
    }
};

export const toggleForm = () => {
    return {
        type: CONSTANTS.FORM.TOGGLE_FORM
    }
};

export const closeForm = () => {
    return {
        type: CONSTANTS.FORM.CLOSE_FORM
    }
};


export const openForm = () => {
    return {
        type: CONSTANTS.FORM.OPEN_FORM
    }
}
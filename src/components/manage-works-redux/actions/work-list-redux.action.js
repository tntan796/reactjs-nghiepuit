import { CONSTANTS } from "../constants/constants"

export const getListAll = () => {
    return {
        type: CONSTANTS.WORK_LIST.LIST_ALL
    }
}

export const changeStatus = (id) => {
    return {
        type: CONSTANTS.WORK_LIST.CHANGE_STATUS,
        id
    }
}

export const deleteWork = (id) => {
    return {
        type: CONSTANTS.WORK_LIST.DELETE_WORK,
        id
    }
}

export const updateWork = (work) => {
    return {
        type: CONSTANTS.WORK_LIST.UPDATE_WORK,
        work
    }
}

export const resetItemEdit = () => {
    return {
        type: CONSTANTS.WORK_LIST.RESET_UPDATE_WORK
    }
}

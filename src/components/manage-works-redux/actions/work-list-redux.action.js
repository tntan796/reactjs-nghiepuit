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
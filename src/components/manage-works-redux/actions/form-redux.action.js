import { CONSTANTS } from "../constants/constants"

export const addTask = (work) => {
    return {
        type: CONSTANTS.FORM.ADD,
        work
    }
}
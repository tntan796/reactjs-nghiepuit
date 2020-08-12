import { CONSTANTS } from "../constants/constants"

export const searchAction = (search) => {
    return {
        type: CONSTANTS.CONTROL.SEARCH,
        search
    }
}
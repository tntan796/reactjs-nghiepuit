import { REDUX_SAGA_CONSTANTS } from "../consts/reduxsaga-constant";

export const openPopup = () => {
    return {
        type: REDUX_SAGA_CONSTANTS.POPUP.OPEN
    }
}

export const closePopup = () => {
    return {
        type: REDUX_SAGA_CONSTANTS.POPUP.CLOSE
    }
}
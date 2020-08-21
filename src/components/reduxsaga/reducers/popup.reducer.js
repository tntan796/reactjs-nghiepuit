import REDUX_SAGA_CONSTANTS from '../consts/reduxsaga-constant';

const initialState = false;
const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_SAGA_CONSTANTS.POPUP.OPEN:
            state = true;
            return state;
        case REDUX_SAGA_CONSTANTS.POPUP.CLOSE:
            state = false;
            return state;
        case REDUX_SAGA_CONSTANTS.POPUP.TOGGLE:
            state = !state;
            return state;
        default:
            return state;
    }
}

export default popupReducer;
import REDUX_SAGA_CONSTANTS from '../consts/reduxsaga-constant';
const initial = {};
const formReducer = (state = initial, action) => {
    switch (action.type) {
        case REDUX_SAGA_CONSTANTS.FORM.EDIT:
            state = action.task;
            return { ...state };
        case REDUX_SAGA_CONSTANTS.FORM.ADD:
            state = {id: '', title: '', description: '', status: 1};
            console.log('state form add:', state);
            return {...state};
        default:
            return { ...state };
    }
}

export default formReducer;
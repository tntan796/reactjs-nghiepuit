import REDUX_SAGA_CONSTANTS from '../consts/reduxsaga-constant';

const initialState = [];
const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_SAGA_CONSTANTS.LIST.RESET_LIST:
            state = initialState;
            return [...state];
        case REDUX_SAGA_CONSTANTS.LIST.GET_LIST_SUCCESS:
            state = action.payload.tasks;
            return [...state];
        case REDUX_SAGA_CONSTANTS.LIST.GET_LIST_FAIL:
            state = action.payload.error;
            return [...state];

        case REDUX_SAGA_CONSTANTS.LIST.ADD_SUCCESS:
            state.push(action.payload.task);
            return [...state];

        case REDUX_SAGA_CONSTANTS.LIST.EDIT_SUCCESS:
            let taskIndex = state.findIndex(t => t.id === action.task.id);
            if (taskIndex !== -1) {
                state[taskIndex].title = action.task.title;
                state[taskIndex].description = action.task.description;
                state[taskIndex].status = action.task.status;
                state[taskIndex] = {...state[taskIndex]};
            }
            return [...state];
        case REDUX_SAGA_CONSTANTS.LIST.GET_LIST_BY_STATUS:
            return [...state.filter(t => t.status === action.status)];
        
            case REDUX_SAGA_CONSTANTS.LIST.DELETE_SUCCESS:
            return [...state.filter(t => t.id !== action.payload.id)];
        default:
            return [...state];
    }
}

export default taskListReducer;
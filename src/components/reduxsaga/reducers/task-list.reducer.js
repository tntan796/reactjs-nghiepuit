import REDUX_SAGA_CONSTANTS from '../consts/reduxsaga-constant';

const initialState = [
    { id: 1, title: 'readbook', description: 'toi dang readbook', status: 1 },
    { id: 2, title: 'view tv', description: 'toi dang view tv', status: 2 },
    { id: 3, title: 'cooking', description: 'toi dang cooking', status: 3 },
    { id: 4, title: 'watch tv', description: 'toi dang watch tv', status: 1 }
];
const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_SAGA_CONSTANTS.LIST.GET_LIST:
            return [...state];
        case REDUX_SAGA_CONSTANTS.LIST.ADD:
            action.task.id = state[state.length - 1].id + 1;
            state.push(action.task);
            console.log('add:', state);
            return [...state];
        case REDUX_SAGA_CONSTANTS.LIST.EDIT:
            let taskIndex = state.findIndex(t => t.id === action.task.id);
            if (taskIndex !== -1) {
                state[taskIndex].title = action.task.title;
                state[taskIndex].description = action.task.description;
                state[taskIndex].status = action.task.status;
            }
            return [...state];
        case REDUX_SAGA_CONSTANTS.LIST.GET_LIST_BY_STATUS:
            return [...state.filter(t => t.status === action.status)];
        case REDUX_SAGA_CONSTANTS.LIST.DELETE:
            return [...state.filter(t => t.id !== action.id)];
        default:
            return [...state];
    }
}

export default taskListReducer;
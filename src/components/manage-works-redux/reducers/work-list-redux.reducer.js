import { v4 as uuidv4 } from 'uuid';
import { CONSTANTS } from '../constants/constants';

let data;
if (localStorage.getItem('works')) {
  data = JSON.parse(localStorage.getItem('works'));
} else {
  data = [
      { id: uuidv4(), name: 'Đi học', status: false},
      { id: uuidv4(), name: 'Đi làm', status: false},
      { id: uuidv4(), name: 'Shoping', status: true},
      { id: uuidv4(), name: 'Đi ngủ', status: true},
  ]
  localStorage.setItem('works', JSON.stringify(data));
}

const initial = data;
const workListReduxReducer = (state = initial, action) => {
    switch (action.type) {
        case CONSTANTS.WORK_LIST.LIST_ALL:
          return state;
        case CONSTANTS.FORM.ADD:
          if (!action.work.id) {
            action.work.id = uuidv4();
              state.push(action.work);
          } else {
              let index = state.findIndex(t => t.id === action.work.id);
              if (index !== -1) {
                state[index] = action.work;
              }
          }
          localStorage.setItem('works', JSON.stringify(state));
          return [...state];
        case CONSTANTS.WORK_LIST.CHANGE_STATUS:
          let works = [...state];
          let work = works.find(t => t.id === action.id);
          if (work) {
              work.status = !work.status;
          }
          localStorage.setItem('works', JSON.stringify([...works]));
          state = works;
          return [...state];
        default:
          return state;
      }
}

export default workListReduxReducer;
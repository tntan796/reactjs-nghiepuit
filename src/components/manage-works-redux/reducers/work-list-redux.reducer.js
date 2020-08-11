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
        default:
          return state;
      }
}

export default workListReduxReducer;
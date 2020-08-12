import { CONSTANTS } from '../constants/constants';
import { DATA_INIT } from '../datas/data-init.mockdata';
import { v4 as uuidv4 } from 'uuid';

let data;
if (localStorage.getItem(CONSTANTS.LOCAL_STORAGE.WORKS)) {
  data = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE.WORKS));
} else {
  data = DATA_INIT;
  localStorage.setItem(CONSTANTS.LOCAL_STORAGE.WORKS, JSON.stringify(data));
}

const initial = data;
const workListReduxReducer = (state = initial, action) => {
  switch (action.type) {
    case CONSTANTS.WORK_LIST.LIST_ALL:
      return state;
    case CONSTANTS.FORM.ADD:
      action.work.id = uuidv4();
      state.push(action.work);
      localStorage.setItem(CONSTANTS.LOCAL_STORAGE.WORKS, JSON.stringify(state));
      return [...state];
    case CONSTANTS.FORM.EDIT:
      let index = state.findIndex(t => t.id === action.work.id);
      if (index !== -1) {
        state[index] = action.work;
        localStorage.setItem(CONSTANTS.LOCAL_STORAGE.WORKS, JSON.stringify(state));
      }
      return [...state];
    case CONSTANTS.WORK_LIST.CHANGE_STATUS:
      let works = [...state];
      let work = works.find(t => t.id === action.id);
      if (work) {
        work.status = !work.status;
      }
      localStorage.setItem(CONSTANTS.LOCAL_STORAGE.WORKS, JSON.stringify([...works]));
      state = works;
      return [...state];
    case CONSTANTS.WORK_LIST.DELETE_WORK:
      let indexDelete = state.findIndex(t => t.id === action.id);
      if (indexDelete !== -1) {
        state.splice(indexDelete, 1);
        localStorage.setItem(CONSTANTS.LOCAL_STORAGE.WORKS, JSON.stringify(state));
      }
      return [...state];
    default:
      return state;
  }
}

export default workListReduxReducer;
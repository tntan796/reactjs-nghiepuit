import ApiCaller from '../utils/apiCaller';
import apiCaller from '../utils/apiCaller';

export const fetchListTask = () => {
    return ApiCaller.get(`tasks`);
}

export const addTask = (task) => {
    return apiCaller.post('tasks/add', task);
}
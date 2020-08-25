import ApiCaller from '../utils/apiCaller';

export const fetchListTask = () => {
    return ApiCaller.get(`tasks`);
}
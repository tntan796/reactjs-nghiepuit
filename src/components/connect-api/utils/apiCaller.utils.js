import axios from 'axios';
import CONNECT_API_CONSTANTS from '../constants/connect-api.constants';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${CONNECT_API_CONSTANTS.CONFIG.BASE_API_URL}/${endpoint}`,
        data: body
    }).catch(error => {
        console.log(error);
    })
}
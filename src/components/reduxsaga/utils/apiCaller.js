import axios from 'axios';
import CONNECT_API_CONSTANTS from '../constants/connect-api.constants';

export default function callApi(endpoint, method = 'GET', body) {
    let baseUrl = CONNECT_API_CONSTANTS.CONFIG.PRODUCT.BASE_API_URL;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        baseUrl = CONNECT_API_CONSTANTS.CONFIG.DEVELOP.BASE_API_URL;;
    }
    return axios({
        method: method,
        url: `${baseUrl}/${endpoint}`,
        data: body
    }).catch(error => {
        console.log(error);
    })
}
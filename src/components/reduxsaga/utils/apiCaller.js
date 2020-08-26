import axios from 'axios';
import CONNECT_API_CONSTANTS from '../consts/reduxsaga-constant';
class ApiCaller {
    baseUrl = '';
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
        this.baseUrl = CONNECT_API_CONSTANTS.CONFIG.PRODUCT.BASE_API_URL;
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            this.baseUrl = CONNECT_API_CONSTANTS.CONFIG.DEVELOP.BASE_API_URL;
        }
    }
    
    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return error;
    }
 

    get(url) {
        return this.instance.get(`${this.baseUrl}/${url}`);
    }

    post(url, data) {
        return this.instance.post(`${this.baseUrl}/${url}`, data);
    }

    put(url, data) {
        return this.instance.post(`${this.baseUrl}/${url}`, data);
    }

    delete(url) {
        return this.instance.delete(`${this.baseUrl}/${url}`);
    }
}

export default new ApiCaller();
import axios from 'axios';
import { API_URL } from './constant';
import { getAuthToken } from './utils';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    proxy: {
        host: 'localhost',
        port: 4000,
    },
});

// Add a request interceptor
instance.interceptors.request.use((config) => {
    const AUTH_TOKEN = getAuthToken();
    if (AUTH_TOKEN) {
        // eslint-disable-next-line no-param-reassign
        config.headers['X-Jwt-Token'] = `Bearer ${AUTH_TOKEN}`;
    }
    return config;
});

const errorHandler = (error) => {
    if (error.response) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({ ...error.response.data, __error: error });
    }
    if (error.request) {
        return Promise.reject(error.request);
    }
    return Promise.reject(error.message);
};

// Add a response interceptor
instance.interceptors.response.use(
    (response) => response.data,
    (error) => errorHandler(error)
);

window.axios = instance;

export default instance;

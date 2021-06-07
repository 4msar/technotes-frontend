import axios from './axios';

const ApiService = {
    login: (email) => axios.post('/auth', { email }),
};

export default ApiService;

import jwtDecode from 'jwt-decode';
import { LS_KEY_NAME } from './constant';

export const getAuthToken = () => {
    const token = localStorage.getItem(LS_KEY_NAME);
    if (token) {
        const decoded = jwtDecode(token);
        const { exp } = decoded;
        if (Date.now() < exp * 1000) {
            return token;
        }
    }
    return false;
};

export default {};

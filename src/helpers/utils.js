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
    localStorage.removeItem(LS_KEY_NAME);
    return false;
};

export const setAuthToken = (token) => {
    if (token) {
        const decoded = jwtDecode(token);
        const { exp } = decoded;
        if (Date.now() < exp * 1000) {
            localStorage.setItem(LS_KEY_NAME, token);
            return true;
        }
    }
    return false;
};

export const removeAuthToken = () => {
    localStorage.removeItem(LS_KEY_NAME);
    return true;
};

export const mockRequest = (data, error = false) =>
    new Promise((resolve, reject) => {
        if (error) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return reject({ error: 'Something went wrong!' });
        }
        setTimeout(() => resolve(data), 1000);
        return !error;
    });

/**
 * Check is Empty
 * @param mixed value
 * @returns boolean
 */
export function isEmpty(value) {
    // eslint-disable-next-line valid-typeof
    if (typeof value === undefined || value === null || value === undefined) {
        return true;
    }
    if (Array.isArray(value) && value.length <= 0) {
        return true;
    }
    if (typeof value === 'object') {
        return Object.values(value).filter((item) => item).length <= 0;
    }
    if (typeof value === 'string') {
        return value.length <= 0;
    }
    if (typeof value === 'number') {
        return value <= 0;
    }
    return !value;
}

export function formatDate(theDate, dateFormat = 'MM/dd/yyyy') {
    const date = new Date(theDate);
    function twoDigitPad(num) {
        return num < 10 ? `0${num}` : num;
    }
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const dayOfWeekNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let format = dateFormat ?? 'M/d/yyyy';
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const miliseconds = date.getMilliseconds();
    const h = hour % 12;
    const hh = twoDigitPad(h);
    const HH = twoDigitPad(hour);
    const mm = twoDigitPad(minute);
    const ss = twoDigitPad(second);
    const AAA = hour < 12 ? 'AM' : 'PM';
    const EEEE = dayOfWeekNames[date.getDay()];
    const EEE = EEEE.substr(0, 3);
    const dd = twoDigitPad(day);
    const M = month + 1;
    const MM = twoDigitPad(M);
    const MMMM = monthNames[month];
    const MMM = MMMM.substr(0, 3);
    const yyyy = `${year}`;
    const yy = yyyy.substr(2, 2);
    // checks to see if month name will be used
    if (format.indexOf('MMM') > -1) {
        format = format.replace('MMMM', MMMM).replace('MMM', MMM);
    } else {
        format = format.replace('MM', MM).replace('M', M);
    }
    format = format
        .replace('hh', hh)
        .replace('h', h)
        .replace('HH', HH)
        .replace('H', hour)
        .replace('mm', mm)
        .replace('m', minute)
        .replace('ss', ss)
        .replace('s', second)
        .replace('S', miliseconds)
        .replace('dd', dd)
        .replace('d', day)
        .replace('EEEE', EEEE)
        .replace('EEE', EEE)
        .replace('yyyy', yyyy)
        .replace('yy', yy)
        .replace('AA', AAA)
        .replace('aaa', AAA);
    return format;
}

export default {};

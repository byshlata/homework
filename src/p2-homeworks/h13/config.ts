import axios from 'axios';

export const API_CONFIG = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
});

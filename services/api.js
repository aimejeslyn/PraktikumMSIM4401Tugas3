import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.coinlore.net/api', // Base URL API
});

export default api;

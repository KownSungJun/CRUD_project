import axios from 'axios';

const api = axios.create({
    baseURL: 'https://turbo-fishstick-95wpjj594vv2xx4j-3000.app.github.dev/api',
    withCredentials: true,
});

export default api;
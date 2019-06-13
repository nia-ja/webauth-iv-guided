import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    // ↓ will run only once, so we need to change axios config like below in `instance.interceptors.request.use`
    // headers: {
    //     authorization: localStorage.getItem('token'), // if there's no token it will send just empty object
    // }
})

instance.interceptors.request.use(
    (config) => {
        // will run every time when request is made
        config.headers.authorization = localStorage.getItem('token');
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;
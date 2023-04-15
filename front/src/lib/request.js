import axios from 'axios'
const request = axios.create({
    // baseURL: "https://api.hanjin.shop",
    baseURL: "127.0.0.1:3001",
    withCredentials: true,
});

export default request;

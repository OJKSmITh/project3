import axios from 'axios'
const request = axios.create({
    baseURL: "https://api.hanjin.shop",
    // baseURL: "http://54.180.163.189:80",
    withCredentials: true,
});

export default request;

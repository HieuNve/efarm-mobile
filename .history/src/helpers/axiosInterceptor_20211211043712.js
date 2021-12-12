import axios from 'axios';
// import envs from '../config/env';

let headers = {};

const axiosInstance = axios.create({
  baseURL: 'http://159.223.56.85/api/',
  headers,
});

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      console.log('responce', response);
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        console.log('error', error);
        reject(error);
      });
    }
    if (error.response.status === 403) {
    } else {
      return new Promise((resolve, reject) => {
        console.log('er403ror', error);
        reject(error);
      });
    }
  },
);
export default axiosInstance;

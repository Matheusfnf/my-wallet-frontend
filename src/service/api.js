import  axios from "axios";
import {parseCookies} from "nookies";

const api = axios.create({
    baseURL: "http://localhost:5000",
})

api.interceptors.request.use(
 (config) => {
    const { "userauth.token": token } = parseCookies();

    api.defaults.headers.common = { ["Authorization"]: `Bearer ${token}` };
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
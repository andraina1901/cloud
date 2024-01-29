import axios from 'axios';


export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
};
// https://testupload-production-2380.up.railway.app
// http://172.10.0.33:8080
axios.defaults.baseURL = 'https://testupload-production-2380.up.railway.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export  function request (method, url, data){
    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {'Authorization': `Bearer ${getAuthToken()}`};
    }

    return axios({
      method: method,
      url: url,
      headers: headers,
      data: data});
};
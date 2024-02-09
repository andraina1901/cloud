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
const a = 'https://cloud-production-2831.up.railway.app/tomobilina'
// const a = 'http://localhost:8080/tomobilina'
axios.defaults.baseURL = a;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export  function request (method, url, data,content='application/json'){
    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {'Authorization': `Bearer ${getAuthToken()}`,'content-type':content};
    }

    return axios({
      method: method,
      url: url,
      headers: headers,
      data: data});
};

export async function upload (url, data){
  axios.post(a+url, data)
      .then(response => {
        console.log(response.data);
        console.log(formData.values);
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi de la photo:', error);
      });
};
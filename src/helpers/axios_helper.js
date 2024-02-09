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

export const destroyAuthHeader = (token) => {
    window.localStorage.removeItem("auth_token");
};
// https://testupload-production-2380.up.railway.app
// http://172.10.0.33:8080
axios.defaults.baseURL = 'https://cloud-production-5432.up.railway.app/tomobilina';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export  function request (method, url, data, content='application/json'){
    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {
          'Authorization': `Bearer ${getAuthToken()}`,
          'content-type': content
        };
    }
    
    return axios({
      method: method,
      url: url,
      headers: headers,
      data: data});
};

export async function upload (url, data){
  axios.post('https://cloud-production-2831.up.railway.app/tomobilina'+url, data)
      .then(response => {
        console.log(response.data);
        console.log(formData.values);
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi de la photo:', error);
      });
};
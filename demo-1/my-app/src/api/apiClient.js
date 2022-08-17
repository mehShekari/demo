import axios from 'axios';

const BASE_URL = "https://fakestoreapi.com";

export const ALL_PRODUCTS = { url: 'products', method: 'get' };

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = 'application/json';

const callApi = (service, query = "") => {
  const promise = new Promise((resolve, reject) => {
    axios[service.method](`${service.url}/${query}`, {})
      .then(res => {
        const { data, status } = res;
        if (status === 200) resolve(data);
      }).catch(error => {
        console.error(error)
        reject(error)
      })
  })

  return promise;
}

export default callApi;
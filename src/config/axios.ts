import axios from 'axios';

const axiosApi = axios.create ({
    baseURL : '',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
  })

  export default axiosApi;
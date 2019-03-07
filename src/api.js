import axios from 'axios';

const axiosInstance = () => {
  const defaultOptions = {
    baseURL: `http://${process.env.REACT_APP_BACKEND_IP}:${process.env.REACT_APP_BACKEND_PORT}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Token ${token}` : '';
    return config;
  });

  return instance;
};

export default axiosInstance();

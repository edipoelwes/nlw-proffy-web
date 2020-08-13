import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deploy-mariana.herokuapp.com/',
});

export default api;